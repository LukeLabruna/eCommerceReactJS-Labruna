import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailConteiner from './componentes/ItemDetailContainer/ItemDetailConteiner'
import Cart from './componentes/Cart/Cart'
import {CarritoProvider} from './context/CarritoContex'
import './App.css'
import Checkout from './componentes/Checkout/Checkout'
import Login from './componentes/Login/Login'
import CrearUsuario from './componentes/CrearUsusario/CrearUsuario'
import Home from './componentes/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/producto/:id' element={<ItemDetailConteiner />} />
            <Route path='/carrito+de+compras' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/crear+usuario' element={<CrearUsuario/>}/>
            <Route path='*' element={<main><h2>Error 404</h2></main>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
