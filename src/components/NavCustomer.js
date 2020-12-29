import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  NavLink
} from "react-router-dom";

function NavCustomer() {
  return (
    <div className="nav">
      <NavLink to="/Customer/Home"><img src={logo} className="app-logo" alt="logo" /> </NavLink>
      <ul>
            <li activeClassName="active">
               <NavLink to="/Customer/Home" activeClassName="active">Emballageoversigt</NavLink>
               <NavLink to="/Customer/Profile" activeClassName="active">Profil</NavLink>
               <NavLink to="/Customer/Message" activeClassName="active">Beskeder</NavLink>
               <NavLink to="/Customer/Tomgods" activeClassName="active">Tomgods</NavLink>
               <NavLink to="/Customer/Svind" activeClassName="active">Svindopgørelse</NavLink>
               <NavLink to="/" activeStyle={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "normal"
              }}>Log ud</NavLink>
            </li>
         </ul>
    </div>
  );
}


export default NavCustomer;
