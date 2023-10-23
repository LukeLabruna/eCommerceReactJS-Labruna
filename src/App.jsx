import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailConteiner from './componentes/ItemDetailContainer/ItemDetailConteiner'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greetings="Bienvenidos al Legendarium de Tolkien"/> } />
          <Route path='/categoria/:categoria' element={ <ItemListContainer /> }/>
          <Route path='/producto/:id' element={ <ItemDetailConteiner/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
