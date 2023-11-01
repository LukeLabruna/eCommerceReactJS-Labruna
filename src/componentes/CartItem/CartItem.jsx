import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContex"
import ItemCartCount from "../ItemCartCount/itemCartCount"
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
  const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div className="CartItem">
      <img src={item.img} alt={item.nombre} />
      <h2 title={item.nombre}>{item.nombre}</h2>
      <p>Precio unitario: ${item.precio}</p>
      <ItemCartCount id={item.id}/>
      <p>Subtotal: ${item.precio * cantidad}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
    </div>
  )

}

export default CartItem