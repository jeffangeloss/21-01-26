function CardVideojuego({videojuego}) {
    return <div key={videojuego.nombre} className="border rounded-md p-4">
        <h2 className="text-2xl mb-2 text-orange-700">{videojuego.nombre}</h2>
        <img className="mb-2"
            src={videojuego.imagen} />
        <p className="mb-2 text-sm">
            {videojuego.descripcion}
        </p>
        <span className="text-xs bg-orange-600 rounded-full text-white px-2 py-1">
            {videojuego.categoria.nombre}
        </span>
    </div>
}

export default CardVideojuego