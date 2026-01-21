import { useState } from "react"

function Formulario({onLogin}) {
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    function correoOnChange(ev) {
        setCorreo(ev.target.value);
    }

    function passwordOnChange(ev) {
        setPassword(ev.target.value)
    }

    return <div>
        <form className="mt-4">
            <div className="grid grid-cols-1">
                <label className="text-sm">Correo</label>
                <input className="border border-gray-300 rounded-md px-2 py-1 text-sm" type="text"
                    value={correo}
                    // onChange={correoOnChange}
                    onChange={function (ev) { // con función anónima
                        setCorreo(ev.target.value)
                    }} />
            </div>
            <div className="grid grid-cols-1">
                <label className="text-sm">Password</label>
                <input className="border border-gray-300 rounded-md px-2 py-1 text-sm" type="password"
                    value={password}
                    onChange={passwordOnChange} />
            </div>
        </form>

        <button className="mt-4 bg-orange-600 w-full rounded-full py-2 text-white" type="button" onClick={function(){
            onLogin(correo,password)
        }}>
            Entrar
        </button>
    </div>
}

export default Formulario