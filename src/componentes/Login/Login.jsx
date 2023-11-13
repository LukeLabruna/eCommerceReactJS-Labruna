import { auth } from "../../services/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import "./Login.css"

const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const iniciarSesion = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }
  return (
  <main className="Login">
    <h2>Iniciar Sesion</h2>
    <form onSubmit={iniciarSesion}>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

      <label htmlFor="password">Contraseña: </label>
      <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Iniciar Sesion</button>
    </form>
  </main>
  )
}

export default Login