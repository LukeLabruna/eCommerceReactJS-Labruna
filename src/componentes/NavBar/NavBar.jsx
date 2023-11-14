import { useState, useEffect, useRef } from "react"
import CartWidget from "../CartWidget/CartWidget"
import BarraBusqueda from '../BarraBusqueda/BarraBusqueda'
import { Link, useLocation } from 'react-router-dom'
import "./NavBar.css"
import IniciarCerrarSesion from "../IniciarCerrarSesion/IniciarCerrarSesion"

const NavBar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false)
  const menuRef = useRef(null);
  const location = useLocation()

  useEffect(() => {
    const handleClickAfuera = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMostrarMenu(false);
      }
    }

    const handleScroll = () => {
      setMostrarMenu(false);
    }

    document.addEventListener("click", handleClickAfuera);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickAfuera);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMostrarMenu(false)
  }, [location.pathname])

  const handleOnClickMenu = (e) => {
    e.stopPropagation();
    setMostrarMenu(!mostrarMenu)
  }

  return (
    <header className='navBar'>
      <Link to="/">
        <div className='brand'>
          <img src={"../logo.png"} alt="Logo de J.R.R. Tolkien" />
          <h1>J.R.R. Tolkien</h1>
        </div>
      </Link>
      <span className="material-symbols-outlined menu " onClick={handleOnClickMenu}>menu</span>
      <div className={`gridNav${mostrarMenu ? " mostrar" : ""}`} ref={menuRef}>
        <nav className={`categoria`}>
          <ul className='categorias'>
            <Link to="/productos"><li>Productos</li></Link>
            <Link to="/productos/libros" ><li>Libros</li></Link>
            <Link to="/productos/peliculas" ><li>Peliculas</li></Link>
            <Link to="/productos/musica" ><li>Musica</li></Link>
            <Link to="/productos/merch" ><li>Merch</li></Link>
          </ul>
          <BarraBusqueda />
        </nav>
        <div>
          <IniciarCerrarSesion/>
          <Link to="/carrito+de+compras" className={`carrito`}><CartWidget /></Link>
        </div>

      </div>
    </header>
  )
}

export default NavBar