import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  Link
} from "react-router-dom";

function NavCustomer() {
  return (
    <div className="nav">
      <Link to="/Customer/Home"><img src={logo} className="app-logo" alt="logo" /> </Link>
      <ul>
            <li>
               <Link to="/Customer/Home">Home</Link>
               <Link to="/Customer/Message">Message</Link>
               <Link to="/Customer/Terms">Terms</Link>
               <Link to="/Customer/Button">Button</Link>
               <Link to="/Prices">Prisliste</Link>
               <Link to="/Tomgods">Tomgods</Link>
               <Link to="/Svind">Svindopgørelse</Link>
               <Link to="/">Logout</Link>
            </li>
         </ul>
    </div>
  );
}


export default NavCustomer;
