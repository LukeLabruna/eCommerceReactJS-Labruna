import { useContext, useState, useEffect } from "react"
import { CarritoContext } from "../../context/CarritoContex"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";




const Cart = () => {
  document.title = "J.R.R. Tolkien | Carrito"

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
  const MySwal = withReactContent(Swal)
  
  const handleVaciarCarrito = () => {
    MySwal.fire({
      position: "center",
      icon: "warning",
      title: "Desea vaciar el carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      background: "#f7f7f1",
      color: "#9F8D60",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito()
      }
    });
  }

  if (cantidadTotal === 0) {
    return (
      <main className="CarritoCompras">
        <h2>No hay productos en el carrito.</h2>
        <Link to="/productos"><button>Ver Productos</button></Link>
      </main>
    )
  }
  return (
    <main>
      <h2>Carrito de Compras</h2>
      <div className="CarritoCompras">
        {carrito.map(item => <CartItem key={item.item.id} {...item} />)}
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <div className="vaciarFinalizar">
          <button onClick={() => handleVaciarCarrito()} > Vaciar Carrito </button>
          <Link to="/checkout"><button>Confirmar Compra</button></Link>
        </div>
      </div>
    </main>
  )
}

export default Cart