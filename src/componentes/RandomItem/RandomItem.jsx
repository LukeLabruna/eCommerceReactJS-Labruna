import { db } from "../../services/config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./RandomItem.css"


const RandomItem = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const misProductos = collection(db, "inventario");
    
    getDocs(misProductos)
      .then(response => {
        const nuevosProductos = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        const productoAleatorio = nuevosProductos.sort(() => Math.random() - 0.5).slice(0, 3);
        setProductos(productoAleatorio)
      })
      .catch(error => console.log("Se produjo el error", error))
  }, [])

  return (
    <div className='RandomItem'>
      <h2>Productos selecionados</h2>
      {productos.map(item => <Item key={item.id} {...item}/> )}
    </div>
  )
}

export default RandomItem