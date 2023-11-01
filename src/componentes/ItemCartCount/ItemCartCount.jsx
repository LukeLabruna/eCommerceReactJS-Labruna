import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContex";
import "./ItemCartCount.css"

const ItemCartCount = ({id}) => {
  const { carrito, actualizarCantidad } = useContext(CarritoContext);
  const producto = carrito.find((prod) => prod.item.id === id);
  const [cantidad, setCantidad] = useState(producto.cantidad);

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
    actualizarCantidad(id, cantidad + 1); 
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      actualizarCantidad(id, cantidad - 1); 
    }
  };

  return (
    <div className="ItemCartCount">
      <p>Cantidad:</p>
      <button onClick={disminuirCantidad}>-</button>
      <p>{cantidad}</p>
      <button onClick={aumentarCantidad}>+</button>
    </div>
  );
};

export default ItemCartCount;