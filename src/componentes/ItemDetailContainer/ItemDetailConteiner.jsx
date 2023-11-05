import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from "../../services/config"
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    const nuevoDoc = doc(db, "inventario", id)

    getDoc(nuevoDoc)
      .then(response => {
        const data = response.data();
        const nuevoProducto = { id: response.id, ...data };
        setProducto(nuevoProducto)
      })
      .catch(error => console.log("Se produjo un error", error))
  }, [id])

  return (
    <main>
      <ItemDetail {...producto} />
    </main>
  )
}

export default ItemDetailConteiner