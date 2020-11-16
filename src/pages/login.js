import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import {
  Link
} from "react-router-dom";

function Login() {
  return (
    <div className="login--wrapper">
        <Link to="/Customer/Home">Customer</Link>
        <Link to="/Admin/Home">Admin</Link>
    </div>
  );
}


export default Login;
