import Titulo from "../components/Titulo"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import { useState } from "react"

const lista = [
        {
            nombre : "CSGO",
            imagen : "/IMG/csgo.jpg",
            descripcion: "Shooter táctico competitivo donde dos equipos se enfrentan en rondas rápidas de ataque y defensa. La clave está en la puntería, la coordinación y la estrategia: compra de armas, control del mapa y comunicación constante para asegurar el objetivo.",
            categoria : "FPS"
        },
        {
            nombre : "DDLC",
            imagen : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/698780/capsule_616x353.jpg?t=1681943582",
            descripcion: "Visual novel que empieza como un juego de citas escolar, pero rápidamente se transforma en una experiencia inquietante. Rompe expectativas con giros psicológicos, tensión creciente y una narrativa que juega con el jugador y sus decisiones.",
            categoria : "Horror psicológico"
        }
    ]

function VideojuegosPage() {
    const categorias = ["FPS", "Horror psicológico"]
    const [listaVideojuegos, setListaVideojuegos] = useState(lista)

    // Queremos que la lista pueda cambiar según el filtro seleccionado, por eso creamos la función filtrar
    function filtrar(categoria) {
        if(categoria == "-1"){
            setListaVideojuegos(lista)
        }else{
            const listaVideojuegosModificado = lista.filter(function(vj){
            // la función filter se aplica a cada uno de los elementos de la lista, si el es verdadero el elemento queda en la nueva lista, si es falso se elimina
            return vj.categoria == categoria 
            // si su categoria es igual a la seleccionada, lo dejo pasar, si no lo es sale de la nueva lista
            })
            setListaVideojuegos(listaVideojuegosModificado)
        }   
    }

    return <div className="px-4">
        <Titulo />
        <Filtro categorias={categorias} onFiltro={filtrar}/>
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos= {listaVideojuegos} />
    </div>
}

export default VideojuegosPage