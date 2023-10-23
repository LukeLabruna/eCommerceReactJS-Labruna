import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({nombre, precio, img, id}) => {
  return (
    <div className='Item'>
      <img src={img} alt={nombre} />
      <h4> {nombre} </h4>
      <p> ${precio} </p>
      <Link to={`/producto/${id}`}><button>Ver Producto</button></Link>
    </div>
  )
}

export default Item