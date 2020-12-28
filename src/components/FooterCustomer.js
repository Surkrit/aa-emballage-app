import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  Link
} from "react-router-dom";

function FooterCustomer() {
  return (
    <footer>
        <div className="footer--address">
            <h2>Alex Andersen Ølund</h2>
            <p>Logistikvej 25A</p>
            <p>5250 Odense SV</p>
            <p>Tlf: 66 18 81 97</p>
        </div>

        <div className="footer--links">
            <Link to="/Customer/Terms">Vilkår</Link>
            <Link to="/Customer/Prices">Prisliste</Link>
        </div>
    </footer>
  );
}


export default FooterCustomer;
