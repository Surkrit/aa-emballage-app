import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  Link
} from "react-router-dom";

function NavAdmin() {
  return (
    <div className="nav">
      <Link to="/Admin/Home"><img src={logo} className="app-logo" alt="logo" /> </Link>
      <ul>
            <li>
               <Link to="/Admin/Home">Home</Link>
               <Link to="/Admin/Terms">Vilkår</Link>
               <Link to="/Admin/Prices">Prisliste</Link>
               <Link to="/">Logout</Link>
            </li>
         </ul>
    </div>
  );
}


export default NavAdmin;
