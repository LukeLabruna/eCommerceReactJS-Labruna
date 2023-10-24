import React from 'react'
import { useState, useEffect } from 'react'
import { getProductosByID } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    getProductosByID(id)
      .then(response => setProducto(response))
      .catch(error => console.log(error))
  }, [id])

  return (
    <main>
      <ItemDetail {...producto} />
    </main>
  )
}

export default ItemDetailConteiner