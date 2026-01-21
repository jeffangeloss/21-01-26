function VideojuegosPage() {
    return <div className="px-4">
        <h1 className="text-4xl">Grilla de Videojuegos</h1>
        <form className="my-4">
            <div className="mb-2">
                <label className="mr-2">Categorías:</label>
                <select className="border rounded-sm w-40">
                    <option>FPS</option>
                    <option>RPG</option>
                    <option>Estrategia</option>
                </select>
            </div>
            <button className="bg-orange-600 py-2 px-4 rounded-md text-white hover:bg-orange-200 hover:text-gray-700">
                Filtrar
            </button>
        </form>
        <hr className="mb-4" />
        <div className="grid grid-cols-3 gap-2">
            <div className="border rounded-md p-4">
                <h2 className="text-2xl mb-2 text-orange-700">CSGO</h2>
                <img className="mb-2"
                    src="/IMG/csgo.jpg" />
                <p className="mb-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.
                </p>
                <span className="text-xs bg-orange-600 rounded-full text-white px-2 py-1">
                    RPG
                </span>
            </div>
            <div className="border rounded-md p-4">
                <h2 className="text-2xl mb-2 text-orange-700">CSGO</h2>
                <img className="mb-2"
                    src="/IMG/csgo.jpg" />
                <p className="mb-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.
                </p>
                <span className="text-xs bg-orange-600 rounded-full text-white px-2 py-1">
                    RPG
                </span>
            </div>
            <div className="border rounded-md p-4">
                <h2 className="text-2xl mb-2 text-orange-700">CSGO</h2>
                <img className="mb-2"
                    src="/IMG/csgo.jpg" />
                <p className="mb-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.
                </p>
                <span className="text-xs bg-orange-600 rounded-full text-white px-2 py-1">
                    RPG
                </span>
            </div>
            <div className="border rounded-md p-4">
                <h2 className="text-2xl mb-2 text-orange-700">CSGO</h2>
                <img className="mb-2"
                    src="/IMG/csgo.jpg" />
                <p className="mb-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.
                </p>
                <span className="text-xs bg-orange-600 rounded-full text-white px-2 py-1">
                    RPG
                </span>
            </div>
            <div className="border rounded-md p-4">
                <h2 className="text-2xl mb-2 text-orange-700">CSGO</h2>
                <img className="mb-2"
                    src="/IMG/csgo.jpg" />
                <p className="mb-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.
                </p>
                <span className="text-xs bg-orange-600 rounded-full text-white px-2 py-1">
                    RPG
                </span>
            </div>
        </div>
    </div>
}

export default VideojuegosPage