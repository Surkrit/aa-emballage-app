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
               <Link to="/Customer/Home">Emballageoversigt</Link>
               <Link to="/Customer/Profile">Profil</Link>
               <Link to="/Customer/Message">Beskeder</Link>
               <Link to="/Customer/Tomgods">Tomgods</Link>
               <Link to="/Customer/Svind">Svindopgørelse</Link>
               <Link to="/">Log ud</Link>
            </li>
         </ul>
    </div>
  );
}


export default NavCustomer;
