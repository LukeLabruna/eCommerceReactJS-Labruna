import { auth } from "../../services/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  document.title = "J.R.R. Tolkien | Iniciar Sesion"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const iniciarSesion = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    .then(response => {response.user && navigate(-1)})
    .catch(error => {
      MySwal.fire({
        position: "center",
        icon: "warning",
        title: "Usuario o contraseña incorrecto",
        showConfirmButton: false,
        showDenyButton: false,
        background: "#f7f7f1",
        color: "#9F8D60",
        timer: 1500,
      });
      setEmail("")
      setPassword("")
    })
  }

  return (
  <main className="Login">
    <h2>Iniciar Sesion</h2>
    <form onSubmit={iniciarSesion}>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>

      <label htmlFor="password">Contraseña: </label>
      <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>

      <button type="submit">Iniciar Sesion</button>
    </form>
  </main>
  )
}

export default Login