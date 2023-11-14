import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContex";
import { useNavigate } from "react-router-dom";
import { db } from "../../services/config";
import { doc, getDoc, collection, updateDoc, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./FinalizarCompra.css"

const FinalizarCompra = ({ nombre, apellido, email, direccion }) => {

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const handleFinalizar = () => {
    const nuevaOrden = {
      productos: carrito.map(producto => ({
        id: producto.item.id,
        categoria: producto.item.categoria,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
        precio: producto.item.precio,
        subtotal: producto.cantidad * producto.item.precio
      })),
      total: `$${total}`,
      cantidadDeProductos: cantidadTotal,
      nombre,
      apellido,
      email,
      datosDeEntrega: direccion,
      fechaDeCompra: new Date(),
    }


    Promise.all(
      nuevaOrden.productos.map(async (item) => {
        const productoRef = doc(db, "inventario", `${item.id}`);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        await updateDoc(productoRef, { stock: stockActual - item.cantidad })
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), nuevaOrden)
          .then(docRef => {
            MySwal.fire({
              position: "center",
              icon: "success",
              title: "Compra finalizada !",
              text: `Tu numero de orden es ${docRef.id}`,
              showConfirmButton: true,
              background: "#f7f7f1",
              color: "#9F8D60",
              iconColor: "#9F8D60",
              customClass: {
                confirmButton: "confirm",
              }
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/")
              }
            });

            vaciarCarrito();
          })
          .catch(error => console.log(error))
      }
      )
      .catch(error => console.log(error))

  }

  return (
    <button onClick={handleFinalizar}>Finalizar la compra</button>
  )
}

export default FinalizarCompra