import { useState, useContext } from "react"
import { db } from "../../services/config"
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { CarritoContext } from "../../context/CarritoContex"

const Checkout = () => {
  document.title = `J.R.R. Tolkien | Checkout`
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

  const [nombre, setNombre] = useState(null)
  const [apellido, setApellido] = useState(null)
  const [telefono, setTelefono] = useState(null)
  const [email, setEmail] = useState(null)
  const [confirmacionEmail, setConfirmacionEmail] = useState(null)
  const [direccion, setDireccion] = useState(null)
  const [localidad, setLocalidad] = useState(null)
  const [codigoPostal, setCodigoPostal] = useState(null)
  const [ordenId, setOrdenId] = useState(null)
  const [errorVacio, setErrorVacio] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nombre || !apellido || !email || !confirmacionEmail || !direccion || !localidad || !codigoPostal) {
      setErrorVacio("El campo esta vacio")
      return;
    }

    if (email !== confirmacionEmail) {
      setErrorEmail("Los Campos no coinciden")
      return;
    }

    const nuevaOrden = {
      productos: carrito.map(producto => ({
        id: producto.item.id,
        categoria: producto.item.categoria,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
      })),
      total: `$${total}`,
      cantidadDeProductos: cantidadTotal,
      nombre,
      apellido,
      email,
      datosDeEntrega: { direccion, localidad, codigoPostal },
      fechaDeCompra: new Date(),
    }
    

    Promise.all(
      nuevaOrden.productos.map( async (item) => {
        const productoRef = doc(db, "inventario", `${item.id}`);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        await updateDoc(productoRef, { stock: stockActual - item.cantidad })
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), nuevaOrden)
          .then(docRef => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch(error => console.log(error))
      }
      )
      .catch(error => console.log(error))

  }

  if (ordenId) {
    return (
      <main>
        <h2>Checkout</h2>
        <h3> Su referencia de compra es {ordenId} </h3>
      </main>
    )
  }
  return (
    <main className='Checkout'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Datos para la confirmacion del pedido</h3>

        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
        {!nombre ? <p>{errorVacio}</p> : ""}

        <label htmlFor="apellido">Apellido: </label>
        <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
        {!apellido ? <p>{errorVacio}</p> : ""}

        <label htmlFor="telefono">Telefono: </label>
        <input type="number" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
        {!telefono ? <p>{errorVacio}</p> : ""}

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        {email !== confirmacionEmail ? <p>{errorEmail}</p> : ""}
        {!email ? <p>{errorVacio}</p> : ""}

        <label htmlFor="confirmacionEmail">Confirmar email: </label>
        <input type="email" id="confirmacionEmail" onChange={(e) => setConfirmacionEmail(e.target.value)} />
        {email !== confirmacionEmail ? <p>{errorEmail}</p> : ""}
        {!confirmacionEmail ? <p>{errorVacio}</p> : ""}

        <label htmlFor="direccion">Direccion: </label>
        <input type="text" id="direccion" onChange={(e) => setDireccion(e.target.value)} />
        {!direccion ? <p>{errorVacio}</p> : ""}

        <label htmlFor="localidad">Localidad: </label>
        <input type="text" id="localidad" onChange={(e) => setLocalidad(e.target.value)} />
        {!localidad ? <p>{errorVacio}</p> : ""}

        <label htmlFor="codigoPostal">Codigo postal: </label>
        <input type="number" id="codigoPostal" onChange={(e) => setCodigoPostal(e.target.value)} />
        {!codigoPostal ? <p>{errorVacio}</p> : ""}

        <button type="submit">Confirmar Pedido</button>
      </form>
    </main>
  )
}

export default Checkout