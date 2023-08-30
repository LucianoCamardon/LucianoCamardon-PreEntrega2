import "./styles.css"
import { Link } from "react-router-dom"
import CartWidget from "./cartWidget"

function Navbar() {
    return <nav className="navbar">
        <ul>
            <Link className="navButtons" to="/">Inicio</Link>
            <Link className="navButtons" to="/Productos">Productos</Link>
            <Link className="navButtons" to="/Categoria/Clothes">Ropa</Link>
            <Link className="navButtons" to="/Categoria/Electronics">Electronicos</Link>
            <Link className="navButtons" to="/Categoria/Furniture">Muebles</Link>
            <Link className="navButtons" to="/Categoria/Shoes">Zapatos</Link>
            <Link className="navButtons" to="/Categoria/Others">Otro</Link>
        </ul>
        <CartWidget/>
    </nav>
}

export default Navbar