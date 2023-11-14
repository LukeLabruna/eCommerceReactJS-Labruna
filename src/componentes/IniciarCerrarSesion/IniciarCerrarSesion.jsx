import { auth, db } from "../../services/config"
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./IniciarCerrarSesion.css"
import { useNavigate } from "react-router-dom";


const IniciarCerrarSesion = () => {

  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate()

  const handleCerrarSesion = async () => {
    await signOut(auth).then(() => {
      setUsuario(null)
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "usuarios", user.uid)
        const document = await getDoc(docRef)
        setUsuario(document.data())
      }
    })
  }, [])

  return (
    <>
      {
        usuario
          ? <div className="IniciarCerrarSesion">
            <p>Hola {usuario.nombre.toUpperCase()}!</p>
            <button onClick={handleCerrarSesion}>Cerrar sesion</button>
          </div>
          : <div className="IniciarCerrarSesion">
              <Link to="/login">Iniciar Sesion</Link>
              <Link to="/crear+usuario">Crear Usuario</Link>
            </div>
      }
    </>
  )
}

export default IniciarCerrarSesion