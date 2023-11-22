import { Link } from "react-router-dom"
import BarraBusqueda from "../BarraBusqueda/BarraBusqueda"
import "./Footer.css"

const Footer = () => {

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
    <div className="top" onClick={handleClick}>
    <i className="fa-solid fa-angles-up"></i>
    <p>Top</p>
    </div>
      <footer>
        <Link to="/">
          <div className='footerBrand'>
            <img src={"../logo.png"} alt="Logo de J.R.R. Tolkien" />
            <h2>J.R.R. Tolkien</h2>
          </div>
        </Link>
        <div className="footerContactanos">
          <h3>Contactanos</h3>
          <p>Atencion al cliente de lunes a viernes de 8 a 20 hs</p>
          <p><span className="material-symbols-outlined">mail</span> ejemplo@ejemplo.com</p>
          <p><span className="material-symbols-outlined">call</span> 1234567890</p>
          <Link to="/ordenes+efectuadas"> <p className="subrayado">Busca tu orden aca</p></Link>
        </div>
        <div className="footerProductos">
          <h3>Productos</h3>
          <Link to="/productos">Todos los productos</Link>
          <Link to="/productos/libros" >Libros</Link>
          <Link to="/productos/peliculas" >Peliculas</Link>
          <Link to="/productos/musica" >Musica</Link>
          <Link to="/productos/merch" >Merch</Link>
        </div>
        <div className="footerBusqueda">
          <h3>Encontra lo que estas buscando</h3>
          <BarraBusqueda />
        </div>
        <div className="footterUsuario">
          <h3>Usuarios</h3>
          <Link to="/login" className="subrayado">Iniciar sesion</Link>
          <Link to="/crar+usuario" className="subrayado">Crear Usuario</Link>
        </div>
        <div className="footerRedes">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
        <div className="footerCopyright">
          <p>J.R.R. Tolkien <i className="fa-regular fa-copyright"></i> 2023. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer