import React from 'react'

import "./CartWidget.css"

const CartWidget = () => {
  
  return (
    <div className='cartWidget'>
      <img src={"../CartWidget.svg"} alt="Carrito de compra" />
      <p>0</p>
    </div>
  )
}

export default CartWidget