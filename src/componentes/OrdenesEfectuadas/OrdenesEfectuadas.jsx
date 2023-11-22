import { db } from "../../services/config"
import { doc, getDoc } from "firebase/firestore"
import { useState } from "react"
import "./OrdenesEfectuadas.css"

const OrdenesEfectuadas = () => {

  const [buscarOrden, setBuscarOrden] = useState("")
  const [orden, setOrden] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const docRef = doc(db, "ordenes", buscarOrden)
    getDoc(docRef)
      .then(response => {
        const ordenDeCompra = () => {
          const data = response.data()
          return { id: response.id, ...data }
        }
        setOrden(ordenDeCompra)
      })
  }

  const fecha = orden && new Date(orden.fechaDeCompra.seconds * 1000).toLocaleDateString('es-ES', {year:"numeric", month:"long", day:"numeric"})
  const fechaEntrega = orden && new Date((orden.fechaDeCompra.seconds + 1296000) * 1000).toLocaleDateString('es-ES', {year:"numeric", month:"long", day:"numeric"})
  

  return (
    <main className="OrdenesEfectuadas">
      <h2>Orden de Compra</h2>

      {!orden
        ?
        <form onSubmit={handleSubmit} >
          <input type="text" onChange={e => setBuscarOrden(e.target.value)} />
          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        : (<div className="ordenCompra">
          <h3 style={{alignSelf: "center"}} >Numero de orden {orden.id}</h3>
          {orden.productos.map((item) => (
            <div key={item.id}>
              <p>Producto: {item.nombre} x {item.cantidad}</p>
              <p>Subtotal: ${item.subtotal} </p>
            </div>
          ))}
          <p>Fecha de compra : {fecha} </p>
          <p>Fecha estimativa de entrega: {fechaEntrega} </p>
          <p style={{alignSelf: "center"}}>Total: {orden.total}</p>
        </div>)}
    </main>
  )
}

export default OrdenesEfectuadas