import CardVideojuego from "./CardVideojuego"

function GrillaVideojuegos({ listaVideojuegos }) {
    return <div>
        <div className="grid grid-cols-3 gap-2">
            {/* Para el cargando */}
            {
                (function () { // La creas y la ejecutas a la función dentro de la función principal
                    if (listaVideojuegos.length == 0) {
                        return <div>No hay videojuegos...</div>
                    } else {
                        {/* Un for no es una expresión js, tenemos que usar los estados */ }
                        {/* Expresión js */ }
                        {
                            // listaVidejuegos.map(funciónTransformadora)
                            // El argumento de entrada se referencia al elemento que se le aplica
                            // lo que devuelve esa función es lo que va a transformarse
                        }
                        return listaVideojuegos.map(function (videojuego) {
                            return <CardVideojuego
                                key={videojuego.nombre}
                                videojuego={videojuego} />
                        })
                    }
                })()
            }
        </div>
    </div>
}

export default GrillaVideojuegos