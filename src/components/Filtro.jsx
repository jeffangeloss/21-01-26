import { useState } from "react"

function Filtro({categorias, onFiltro}){
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("-1")

    return <div>
        <form className="my-4">
            <div className="mb-2">
                <label className="mr-2">Categorías:</label>
                <select className="border rounded-sm w-40"
                value={categoriaSeleccionada}
                onChange={function(ev){setCategoriaSeleccionada(ev.target.value)}}>
                    <option value={"-1"}>Selecione alguna categoría</option>
                    {/* Aquí irían las opciones generadas dinámicamente */
                        categorias.map(function(categoria){
                            return <option key={categoria.id} value={categoria.id}>
                                {categoria.nombre}
                            </option>
                        })
                    }
                </select>
            </div>
            <button className="bg-orange-600 py-2 px-4 rounded-md text-white hover:bg-orange-200 hover:text-gray-700" onClick={function(){
                onFiltro(categoriaSeleccionada)
            }}>
                Filtrar
            </button>
        </form>
    </div>
}
export default Filtro