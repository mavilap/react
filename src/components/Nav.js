import {  Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav class="nav-bar">
            <ul class="menu">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/blogs">Blogs</Link> </li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;