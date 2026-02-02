import Titulo from "../components/Titulo"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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

    // Queremos que la lista pueda cambiar según el filtro seleccionado, por eso creamos la función filtrar
    // function filtrar(categoria) {
    //     if (categoria == "-1") {
    //         setListaVideojuegos(lista)
    //     } else {
    //         const listaVideojuegosModificado = lista.filter(function (vj) {
    //             // la función filter se aplica a cada uno de los elementos de la lista, si el es verdadero el elemento queda en la nueva lista, si es falso se elimina
    //             return vj.categoria == categoria
    //             // si su categoria es igual a la seleccionada, lo dejo pasar, si no lo es sale de la nueva lista
    //         })
    //         setListaVideojuegos(listaVideojuegosModificado)
    //     }
    // }

    // Este filtrado en el front ya no sirve, pero este es solo de frontend, realmente si existe pero... si hacen consultas más grandes se necesita de filtrado en el backend

    // yo le envió al bankend y este me lo devuelve mediante un query parameter, mediante url
    async function filtrar(categoria) {
        const URL = "https://script.google.com/macros/s/AKfycbwN_f3ANnjp4W4-MTf-2gmHT3KZZeNPXiQsaeyWEmOlcAzms8TaGk65eyU-z4Neuz_ISg/exec"
        //const response = await fetch(URL + "?categoria=" + categoria)
        // hay una forma mejor de hacer esto: interpolación de strings con las comillas invertidas ``
        // como hacer comillas invertidas: alt + 96
        let response
        if (categoria == "-1") {
            response = await fetch(URL)
        } else {
            response = await fetch(`${URL}?categoria=${categoria}`)
        }

        if (!response.ok) {
            console.error("Error de pletición. " + response.status)
            return
        }
        const data = await response.json()
        setListaVideojuegos(data)
    }


    function logout() {
        localStorage.clear()
        navigate("/")
    }

    async function obtenerCategoriasHTTP() {
        const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiqUhhn7PlOjq7eGUVydyjNJDRhQogqsVTM5CbQMu2Q3NRVBzQT9bfkY1XLdHbeFp-hxAm-D2fU1wQttcf4BPuzVbV66l79on8Vj7eqS9hOTGiw7LTBZGIKVgwpseUehYq5AUDzLnxlixhXzeb1qwE5V3dQMxRB00rbpBTBxjfItfS7wsQEuRgS0jrDlhgUeQYjVJqYpy1uvexJ03iQxoqpoeJgLy8ivD1ZI2f2Q-ves6GQlwmwcKHxezyfWMwM8pqZBlgOwxN1mtgIjuJt3FrD2Q_dxbARGlKymNpB_mD8T_Fm-3JfZ85uOi6e8g&lib=MwotjRmUun0RLlzJNoicmGhJptMVnD4LO"
        const response = await fetch(URL)

        if (!response.ok) {
            console.error("Error de pletición. " + response.status)
            return
        }

        const data = await response.json()
        setCategorias(data)
    }

    async function obtenerVideoJuegosHTTP() {
        const URL = "https://script.google.com/macros/s/AKfycbwN_f3ANnjp4W4-MTf-2gmHT3KZZeNPXiQsaeyWEmOlcAzms8TaGk65eyU-z4Neuz_ISg/exec"
        const response = await fetch(URL)

        if (!response.ok) {
            console.error("Error de pletición. " + response.status)
            return
        }

        const data = await response.json()
        setListaVideojuegos(data)
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