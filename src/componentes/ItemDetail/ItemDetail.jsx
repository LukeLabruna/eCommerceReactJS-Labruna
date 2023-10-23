import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({ nombre, precio, img, descripcion, stock }) => {
  const [cantidadAlCarrito, setCantidadAlCarrito] = useState(0);

  const handleOnAdd = (cantidad) => {
    setCantidadAlCarrito(cantidad)
    console.log(`Se agrego ${cantidad} del producto ${nombre}`);
  }



  return (
    <div className='ItemDetail'>
      <h2>{nombre}</h2>
      <div className='infoDetalle'>
        <img src={img} alt={nombre} />
        <div className='textoDetalle'>
          <p><strong> Descripcion:</strong> {descripcion} </p>
          <p>3 y 6 cuotas sin interes con todas las tarjetas</p>
          <p>10% off con transferencia</p>
          <p><strong>Precio:</strong> ${precio}</p>
          <div>
            {cantidadAlCarrito > 0
              ? <Link to="/carrito+de+compras"> <button className='botonFinalizarCompra'> Finalizar Compra </button> </Link>
              : (stock > 0
                ? <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                : <p>El producto no se encuentra disponible.</p>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail