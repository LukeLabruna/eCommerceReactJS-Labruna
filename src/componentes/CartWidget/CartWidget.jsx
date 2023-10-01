import React from 'react'
import imagen from "./CartWidget.svg"
import "./CartWidget.css"

const CartWidget = () => {
  
  return (
    <div className='cartWidget'>
      <img src={imagen} alt="Carrito de compra" />
      <p>0</p>
    </div>
  )
}

export default CartWidget