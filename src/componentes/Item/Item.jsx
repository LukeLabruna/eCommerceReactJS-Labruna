import React from 'react'
import "./Item.css"

const Item = ({nombre, precio, img}) => {
  return (
    <div className='Item'>
      <img src={img} alt={nombre} />
      <h4> {nombre} </h4>
      <p> ${precio} </p>
      <button>Ver Producto</button>
    </div>
  )
}

export default Item