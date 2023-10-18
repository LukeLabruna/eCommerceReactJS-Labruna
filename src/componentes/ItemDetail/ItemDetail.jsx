import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"

const ItemDetail = ({ nombre, precio, img, descripcion, stock }) => {
  return (
    <div className='ItemDetail'>
      <h2> {nombre} </h2>
      <div className='infoDetalle'>
        <img src={img} alt={nombre} />
        <div className='textoDetalle'>
          <p><strong> Descripcion:</strong> {descripcion} </p>
          <p>3 y 6 cuotas sin interes con todas las tarjetas</p>
          <p>10% off con transferencia</p>
          <p><strong>Precio:</strong> ${precio}</p>
          <div>
            {stock
              ? <ItemCount inicial={1} stockInicial={stock} />
              : <p>El producto no se encuentra disponible.</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail