import { useState } from "react"
import Cabecera from "../components/cabecera"
import Formulario from "../components/Formulario"
import Mensaje from "../components/Mensaje"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    const [mensajeVisible,setMensajeVisible] = useState(false)
    // Por defecto en falso porque quiero que no se vea

    const navigate = useNavigate()

    function login(correo,password) {
        if (correo == "miau" && password == "miau") {
            console.log("Login correcto")
            navigate("/main")
        } else {
            setMensajeVisible(true)
        }
    }

    return <div className="flex justify-center">
        <div className="border-2 rounded-lg border-gray-300 shadow-md p-4">
            <Cabecera />
            <Formulario onLogin = {login} />
            <Mensaje msg={"Login error"} visible={mensajeVisible} />
            {/* <Link className="mt-10 bg-orange-600 w-full rounded-full px-4 py-2 text-white" to={"/main"}>Accede sin Login</Link> */}
        </div>
    </div>
}

export default LoginPage