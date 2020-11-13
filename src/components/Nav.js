import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <img src={logo} className="app-logo" alt="logo" />
      <ul>
            <li>
               <Link to="/">Home</Link>
               <Link to="/Message">Message</Link>
               <Link to="/Terms">Terms</Link>
               <Link to="/Button">Button</Link>
            </li>
         </ul>
    </div>
  );
}


export default Nav;
