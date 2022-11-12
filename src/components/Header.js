//import { Outlet, Link } from "react-router-dom";
import logo from '../logo.png';
const Header = () => {
    return (
        <header class="encabezado">
            <img src={logo} alt="Imagen de l logo" />
            <h1>Aprendo Html y CSS, este es el título </h1>
            <p>Este es un párrafo</p>
        </header>
    );
}
export default Header;