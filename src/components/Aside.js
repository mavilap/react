import {  Link } from "react-router-dom";

const Aside = () => {
    return (
        <aside class="lateral">
            <h2>Menú lateral</h2>
            <ul class="menu-l">
                <li><a href="index.html"> Inicio</a> </li>
                <li><a href="index.html">Informacion</a> </li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </aside>

    );
}

export default Aside;