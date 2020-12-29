import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  NavLink
} from "react-router-dom";

function NavAdmin() {
  return (
    <div className="nav">
      <NavLink to="/Admin/Home"><img src={logo} className="app-logo" alt="logo" /> </NavLink>
        <ul>
            <li>
               <NavLink to="/Admin/Home" activeClassName="active">Beskeder</NavLink>
               <NavLink to="/Admin/Terms" activeClassName="active">Vilkår</NavLink>
               <NavLink to="/Admin/Prices" activeClassName="active">Prisliste</NavLink>
               <NavLink to="/" activeStyle={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "normal"
              }}>Logout</NavLink>
            </li>
         </ul>
    </div>
  );
}


export default NavAdmin;
