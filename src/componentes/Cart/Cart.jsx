import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContex"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
  document.title = "J.R.R. Tolkien | Carrito"

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

  if (cantidadTotal === 0) {
    return (
      <main className="CarritoCompras">
        <h2>No hay productos en el carrito.</h2>
        <Link to="/"><button>Ver Productos</button></Link>
      </main>
    )
  }
  return (
    <main>
      <h2>Carrito de Compras</h2>
      <div className="CarritoCompras">
        {carrito.map(item => <CartItem key={item.id} {...item} />)}
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <div className="vaciarFinalizar">
          <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
          <Link to="/checkout"><button>Finalizar Compra</button></Link>
        </div>
      </div>
    </main>
  )
}

export default Cart