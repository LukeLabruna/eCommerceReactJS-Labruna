import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);
  
  const handleIncrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }
  const handleDecrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className='ItemCount'>
      <p>Se encuentra disponible {stock} unidades de este producto </p>
      <div className='botonesContador'>
        <button className='botonContador' onClick={handleDecrementar}>-</button>
        <p className='cantidadContador'>{cantidad}</p>
        <button className='botonContador' onClick={handleIncrementar}>+</button>
      </div>
      <button className='botonAgregarCarrito' onClick={() => onAdd(cantidad)}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount