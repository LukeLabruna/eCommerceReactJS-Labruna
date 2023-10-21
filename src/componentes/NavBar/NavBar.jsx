import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='brand'>
        <img src={"./logo.png"} alt="Logo de J.R.R. Tolkien" />
        <h1>J.R.R. Tolkien</h1>
      </div>
      <nav>
        <ul className='categorias'>
          <li>Libros</li>
          <li>Peliculas</li>
          <li>Musica</li>
          <li>Merch</li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar