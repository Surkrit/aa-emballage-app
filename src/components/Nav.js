import "../style/App.css";
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <img src="" className="App-logo" alt="logo" />
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
