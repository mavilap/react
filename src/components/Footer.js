import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer class="pie">
            <p> Si desea mas información <b>haga clic </b>  en <a href="https://google.com"> Mas información</a></p>
            <p> Hola soy un párrafo y me encuentro ubicado en el pié de página </p>
            <Link to="/Contact">Contact</Link>
        </footer>
    );

}
export default Footer;