import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ inicial, stockInicial }) => {
  const [cantidad, setCantidad] = useState(inicial);
  const [stock, setStock] = useState(stockInicial)

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

  const handleAgregarCarrito = () => {
    if (stock > 0) {
      console.log(`Se agrego ${cantidad} al carrito`);
      setCantidad(inicial);
      setStock(stock - cantidad)
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
      <button className='botonAgregarCarrito' onClick={handleAgregarCarrito}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount