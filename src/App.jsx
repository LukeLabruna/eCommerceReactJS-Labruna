
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemDetailConteiner from './componentes/ItemDetailContainer/ItemDetailConteiner'

function App() {
  
  return (
    <>
      <NavBar />
      {/* <ItemListContainer greetings="Bienvenidos al Legendarium de Tolkien"/> */}
      <ItemDetailConteiner />
    </>
  )
}

export default App
