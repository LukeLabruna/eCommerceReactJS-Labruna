import { useState, useContext, useEffect } from "react"
import { db } from "../../services/config"
import { doc, getDoc } from "firebase/firestore"
import { CarritoContext } from "../../context/CarritoContex"
import { auth } from "../../services/config"
import { onAuthStateChanged } from "firebase/auth"
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra"
import "./Checkout.css"
import { Link } from "react-router-dom"


const Checkout = () => {
  document.title = `J.R.R. Tolkien | Checkout`
  const { carrito, total, cantidadTotal } = useContext(CarritoContext)
  const [usuario, setUsuario] = useState(null)

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
    <main >
      <h2>Checkout</h2>
      <div className='Checkout'>
        {
          carrito.map(item => <p key={item.item.id}>{item.item.nombre} x {item.cantidad}</p>)
        }
        <p>Total de productos: {cantidadTotal}</p>
        <p>Total: ${total}</p>
        {usuario
          ? <FinalizarCompra {...usuario} />
          : <>
            <p>Para finalizar la compra debes</p>
            <div className="IniciarCerrarSesion link">
              <Link to="/login">Iniciar Sesion</Link>
              <p>|</p>
              <Link to="/crear+usuario">Crear Usuario</Link>
            </div>
          </>
        }
      </div>
    </main>
  )
}

export default Checkout