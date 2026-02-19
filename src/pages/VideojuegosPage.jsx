import Titulo from "../components/Titulo"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import params from "../params"

const lista = [
    // Esto lo pediremos desde un servidor para usar fetch
    {
        nombre: "CSGO",
        imagen: "/IMG/csgo.jpg",
        descripcion: "Shooter táctico competitivo donde dos equipos se enfrentan en rondas rápidas de ataque y defensa. La clave está en la puntería, la coordinación y la estrategia: compra de armas, control del mapa y comunicación constante para asegurar el objetivo.",
        categoria: "FPS"
    },
    {
        nombre: "DDLC",
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/698780/capsule_616x353.jpg?t=1681943582",
        descripcion: "Visual novel que empieza como un juego de citas escolar, pero rápidamente se transforma en una experiencia inquietante. Rompe expectativas con giros psicológicos, tensión creciente y una narrativa que juega con el jugador y sus decisiones.",
        categoria: "Horror psicológico"
    }
]

function VideojuegosPage() {
    const [categorias, setCategorias] = useState([])
    const [listaVideojuegos, setListaVideojuegos] = useState([])

    const navigate = useNavigate();

    function logout() {
        localStorage.clear()
        navigate("/")
    }

    async function filtrar(categoria) {
        const URL = `${params.BACKEND_URL}/videojuegos/`
        //const response = await fetch(URL + "?categoria=" + categoria)
        // hay una forma mejor de hacer esto: interpolación de strings con las comillas invertidas ``
        // como hacer comillas invertidas: alt + 96
        let response
        if (categoria == "-1") {
            response = await fetch(URL,{
                headers : {
                    "x-token" : localStorage.getItem("TOKEN")
                }
            })
        } else {
            response = await fetch(`${URL}?categoria=${categoria}`)
        }

        if (!response.ok) {
            console.error("Error de pletición. " + response.status)
            return
        }
        const data = await response.json()
        setListaVideojuegos(data.data)
    }

    async function obtenerVideoJuegosHTTP() {
        const URL = `${params.BACKEND_URL}/videojuegos/`
        const response = await fetch(URL,{
            headers : {
                "x-token" : localStorage.getItem("TOKEN")
            }
        })

        if (!response.ok) {
            console.error("Error de pletición. " + response.status)
            return
        }

        const data = await response.json()
        setListaVideojuegos(data.data)
    }

    async function obtenerCategoriasHTTP() {
        const URL = `${params.BACKEND_URL}/categorias/`
        const response = await fetch(URL,{
            headers : {
                "x-token" : localStorage.getItem("TOKEN")
            }
        })

        if (!response.ok) {
            console.error("Error de pletición. " + response.status)
            return
        }

        const data = await response.json()
        setCategorias(data.data)
    }

    // Solamente se ejecuta la primera vez que se renderiza el componente
    useEffect(function () {
        obtenerVideoJuegosHTTP()
        obtenerCategoriasHTTP()
    }, [])
    // Esta función se ejecuta luego de renderizar tu componente

    return <div className="px-4">
        <Titulo onLogout={logout} />
        <Filtro categorias={categorias} onFiltro={filtrar} />
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos={listaVideojuegos} />
    </div>
}

export default VideojuegosPage