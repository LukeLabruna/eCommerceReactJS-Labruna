import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greetings }) => {
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
      <h2 style={{ textAlign: "center"}}> {categoria ? categoria : greetings} </h2>
      <ItemList productos={productos} titulo={categoria ? undefined : <h2>Productos</h2>}/>
    </main>

  )
}

export default ItemListContainer