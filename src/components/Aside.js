import {  Link } from "react-router-dom";

const Aside = () => {
    return (
        <aside class="lateral">
            <h2>Menú lateral</h2>
            <ul class="menu-l">
                <li><a href="#"> Inicio</a> </li>
                <li><a href="#">Informacion</a> </li>
                <li><a href="contactame.html"> Acerca de</a></li>
            </ul>
        </aside>

    );
}

export default Aside;