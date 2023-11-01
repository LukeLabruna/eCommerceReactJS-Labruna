import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../context/CarritoContex'
import "./ItemDetail.css"

const ItemDetail = ({ nombre, precio, img, descripcion, stock, id }) => {
  document.title = `J.R.R. Tolkien | ${nombre}`

  const [cantidadAlCarrito, setCantidadAlCarrito] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAlCarrito(cantidad)
    const item = {id, nombre, precio, img};
    agregarAlCarrito(item, cantidad);
    console.log(`Se agrego ${cantidad} del producto ${nombre}`);
  }



  return (
    <article className='ItemDetail'>
      <h2>{nombre}</h2>
      <div className='infoDetalle'>
        <img src={img} alt={nombre} />
        <div className='textoDetalle'>
          <p className='precio'><strong>Precio:</strong> ${precio}</p>
          <div className='cuotas'>
            <p>3 y 6 cuotas sin interes con todas las tarjetas</p>
            <p>10% off con transferencia</p>
          </div>
          <div>
            {cantidadAlCarrito > 0
              ? <Link to="/carrito+de+compras"> <button className='botonFinalizarCompra'> Finalizar Compra </button> </Link>
              : (stock > 0
                ? <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                : <p>El producto no se encuentra disponible.</p>)
            }
          </div>
          <p className='descripcion'><strong> Descripcion:</strong> {descripcion} </p>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail