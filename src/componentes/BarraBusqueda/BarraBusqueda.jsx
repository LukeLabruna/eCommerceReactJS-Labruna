import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./BarraBusqueda.css";
import { db } from '../../services/config'
import { collection, getDocs} from 'firebase/firestore'

const BarraBusqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const containerBusquedaRef = useRef(null);
  const location = useLocation()

  useEffect(() => {
    const misProductos = collection(db, "inventario");

    getDocs(misProductos)
      .then(response => {
        const nuevosProductos = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.log("Se produjo el error", error))
  }, [])


  const filtroDeProductos = productos.filter((item) =>
    item.nombre?.toLowerCase().includes(busqueda?.toLowerCase())
  );

  useEffect(() => {
    const handleClickAfuera = (e) => {
      if (containerBusquedaRef.current && !containerBusquedaRef.current.contains(e.target)) {
        setMostrarResultados(false);
        setBusqueda("");
      }
    }

    document.addEventListener("click", handleClickAfuera);

    return () => {
      document.removeEventListener("click", handleClickAfuera);
    };
  }, []);

  useEffect (() => {
    setBusqueda("");
    setMostrarResultados(false)
  }, [location.pathname])

  const handleOnChange = (e) => {
    setBusqueda(e.target.value);
    setMostrarResultados(true);
  }


  return (
    <div className="BarraBusqueda" ref={containerBusquedaRef}>
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={handleOnChange}
      />
      {mostrarResultados && (
        <ul>
          {busqueda.length > 0 && filtroDeProductos.map((item) => (
            <Link to={`/producto/${item.id}`} key={item.id} ><li>{item.nombre} <span>({item.categoria})</span></li></Link>
          ))}
        </ul>)}
    </div>
  );
}

export default BarraBusqueda