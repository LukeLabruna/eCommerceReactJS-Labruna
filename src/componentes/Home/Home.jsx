import "./Home.css"
import { Link } from "react-router-dom"
import RandomItem from "../RandomItem/RandomItem"

const Home = () => {
  return (
    <main>
      <h2>Bienvenidos al Legendarium de Tolkien</h2>
      <div className="introduccion">
        <img src={"../tolkien.jpg"} alt="Portaretrato de Tolkien" />
        <div>
          <p><span>John Ronald Reuel Tolkien</span> nació el 3 de enero de 1892 en Bloemfontein, Estado Libre de Orange, pero a la edad de cuatro años, él y su hermano fueron llevados de regreso a Inglaterra por su madre. Después de la muerte de su padre, la familia se mudó a Sarehole, en el extremo sureste de Birmingham. Tolkien pasó una infancia feliz en el campo, y su sensibilidad hacia el paisaje rural se refleja claramente en su escritura y sus dibujos.</p>

          <p>Su madre falleció cuando tenía solo doce años, y tanto él como su hermano fueron declarados pupilos del sacerdote local y enviados a la Escuela King Edward en Birmingham, donde Tolkien destacó en sus estudios clásicos. Después de obtener una licenciatura en inglés en Oxford, Tolkien se casó con Edith Bratt. También fue comisionado en los Lancashire Fusiliers y luchó en la batalla del Somme. Después de la guerra, obtuvo un puesto en el New English Dictionary y comenzó a escribir el ciclo mitológico y legendario que originalmente llamó El Libro de los Cuentos Perdidos, pero que eventualmente se conoció como El Silmarillion.</p>

          <p>En 1920, Tolkien fue nombrado Lector de la Lengua Inglesa en la Universidad de Leeds, marcando el comienzo de una distinguida carrera académica que culminó con su elección como Profesor Rawlinson y Bosworth de anglosajón en Oxford. Mientras tanto, Tolkien escribía para sus hijos y les contaba la historia de El Hobbit. Fue su editor, Stanley Unwin, quien pidió una secuela de El Hobbit y gradualmente Tolkien escribió El Señor de los Anillos, una enorme historia que tardó doce años en completarse y que no se publicó hasta que Tolkien se acercaba a la jubilación. Después de jubilarse, Tolkien y su esposa vivieron cerca de Oxford, pero luego se mudaron a Bournemouth. Tolkien regresó a Oxford después de la muerte de su esposa en 1971. Falleció el 2 de septiembre de 1973, dejando El Silmarillion para ser editado y publicado por su hijo, Christopher.</p>
        </div>
      </div>
      <div  className="ecommerce">
        <p>Adéntrate en el universo de Tolkien: libros, música, merchandising y películas de la Tierra Media te esperan. Descubre la magia y lleva a casa tus favoritos.</p>
        <RandomItem/>
        <button><Link to="./productos">Ver todos los productos</Link></button>
      </div>
    </main>
  )
}

export default Home