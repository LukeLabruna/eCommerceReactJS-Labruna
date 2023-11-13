import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {categoria} = useParams();

  useEffect(() => {
    const misProductos = categoria 
                          ? query(collection(db, "inventario"), where("categoria", "==", categoria)) 
                          : collection(db, "inventario");

    getDocs(misProductos)
      .then(response => {
        const nuevosProductos = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log("Se produjo el error", error))
  }, [categoria])

  return (
    <main>
       {categoria ? <h2 style={{ textAlign: "center"}}> {categoria} </h2> : undefined} 
      <ItemList productos={productos} titulo={categoria ? undefined : <h2>Productos</h2>}/>
    </main>

  )
}

export default ItemListContainer