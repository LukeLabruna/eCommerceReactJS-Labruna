import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({productos, titulo}) => {
  return (
    <div className='ItemList'>
      {titulo}
      {productos.map(item => <Item key={item.id} {...item}/> )}
    </div>
  )
}

export default ItemList