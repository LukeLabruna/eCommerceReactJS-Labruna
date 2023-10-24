import React from 'react'
import { useState, useEffect } from "react"
import { getProductos, getProductosByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const {categoria} = useParams();

  useEffect(() => {
    const productos = categoria ? getProductosByCategory : getProductos;
    productos(categoria)
      .then(response => { 
        setProductos(response);
        categoria ? document.title = `J.R.R. Tolkien | ${response[0].categoria.toUpperCase()}` : document.title = "J.R.R. Tolkien | Legendarium" ;
        })
      .catch(error => { console.log(error) })
  }, [categoria])

  return (
    <main>
      <h2 style={{ textAlign: "center"}}> {categoria ? categoria : greetings} </h2>
      <ItemList productos={productos} titulo={categoria ? undefined : <h2>Productos</h2>}/>
    </main>

  )
}

export default ItemListContainer