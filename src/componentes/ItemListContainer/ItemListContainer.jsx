import React from 'react'
import { useState, useEffect } from "react"
import { getProductos } from '../../asyncmock'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then(response => { setProductos(response) })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <>
      <h2 style={{ textAlign: "center" }}> {greetings} </h2>
      <ItemList productos={productos}/>
    </>

  )
}

export default ItemListContainer