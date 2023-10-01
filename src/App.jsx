
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings="Bienvenidos al Legendarium de Tolkien"/>
    </>
  )
}

export default App
