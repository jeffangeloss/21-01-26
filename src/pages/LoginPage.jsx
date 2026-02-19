import { useEffect, useState } from "react"
import Cabecera from "../components/cabecera"
import Formulario from "../components/Formulario"
import Mensaje from "../components/Mensaje"
import params from "../params"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    const [mensajeVisible, setMensajeVisible] = useState(false)
    // Por defecto en falso porque quiero que no se vea

    const navigate = useNavigate()

    useEffect(function () { // Función que se ejecuta cuando se termine de renderizar mi página
        const datosLogin = localStorage.getItem("DATOS_LOGIN")
        if (datosLogin != null) {
            const login = JSON.parse(datosLogin)
            if (login.ingreso == true) {
                navigate("/main")
                return
            }
        }
    }, [])

    async function loginHTTP(correo,password){
        const resp = await fetch(`${params.BACKEND_URL}/login/`,{
            method: "post",
            body: JSON.stringify({
                username: correo,
                password : password
            }),
            headers: {
                "content-type" : "application/json"
            }
        })
        if (resp.status != 200){
            // Error en login
            const data = await resp.json()
            console.error("ERROR:", data)
            return false
        }

        const data = await resp.json()
        if(data.msg == "Acceso concedido"){
            localStorage.setItem("TOKEN", data.token) // Cuando el acceso se ha concedido ya se ha guardado en localstorage
            return true
        }else{
            console.error(data.detail)
            return false
        }
    }

    async function login(correo, password) {
        const resultadoLogin = await loginHTTP(correo,password)
        if (resultadoLogin) {
            console.log("Login correcto")
            navigate("/main")

            // Si el login es correcto
            // const datosLogin ={ objeto javascript
            const datosLogin = {
                ingreso: true,
                correo: correo,
                cantidadIntentos: 0
            }
            // El API de localStorage solo almacena texto (strings)
            // Yo quiero almacenar la información del objeto datos_login
            localStorage.setItem("DATOS_LOGIN", JSON.stringify(datosLogin))

        } else {
            setMensajeVisible(true)

            // CantidadIntentos
            const datosLogin = localStorage.getItem("DATOS_LOGIN") /// función que puede devolver un dato o nulo
            if (datosLogin == null) {
                const login = {
                    ingreso: false,
                    cantidadIntentos: 1
                }
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            } else {
                const login = JSON.parse(datosLogin) // convierto el string en objeto nuevamente
                login.cantidadIntentos++
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            }
        }
    }

    return <div className="flex justify-center">
        <div className="border-2 rounded-lg border-gray-300 shadow-md p-4">
            <Cabecera />
            <Formulario onLogin={login} />
            <Mensaje msg={"Login error"} visible={mensajeVisible} />
            {/* <Link className="mt-10 bg-orange-600 w-full rounded-full px-4 py-2 text-white" to={"/main"}>Accede sin Login</Link> */}
        </div>
    </div>
}

export default LoginPage