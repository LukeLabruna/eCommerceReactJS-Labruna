import React from 'react'
import { useState, useEffect } from 'react'
import { getProductosByID } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
  const [productoByID, setProductoByID] = useState([])

  useEffect(() => {
    getProductosByID(26)
      .then(response => setProductoByID(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <ItemDetail {...productoByID} />
  )
}

export default ItemDetailConteiner