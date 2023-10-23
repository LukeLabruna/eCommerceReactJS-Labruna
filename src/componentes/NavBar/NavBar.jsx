import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className='navBar'>
      <Link to="/">
        <div className='brand'>
          <img src={"../logo.png"} alt="Logo de J.R.R. Tolkien" />
          <h1>J.R.R. Tolkien</h1>
        </div>
      </Link>
      <nav>
        <ul className='categorias'>
          <Link to="/categoria/libros" ><li>Libros</li></Link>
          <Link to="/categoria/peliculas" ><li>Peliculas</li></Link>
          <Link to="/categoria/musica" ><li>Musica</li></Link>
          <Link to="/categoria/merch" ><li>Merch</li></Link>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar