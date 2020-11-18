import React from 'react';
import "../style/App.css";
import logo from '../images/aa-logo-big.png'; // with import
import Headline from '../components/Headline';
import Button from '../components/Button';
import {
  Link
} from "react-router-dom";

function Login() {
  return (
    <div className="login--wrapper">
      <img src={logo} className="app-logo" alt="logo" />
      <div className="login--wrapper__content">
        <Headline title="Velkommen" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia tempor egestas. Nullam enim erat, consequat et nisi eget, pellentesque sodales justo. Etiam ut iaculis nibh. Suspendisse nulla libero, sagittis ut justo sit amet, volutpat venenatis elit. Donec fermentum posuere nisi tempor auctor.  </p>
        <form className="login--form">
          <div className="login--form__wrapper">
            <label for="brugernavn">Brugernavn</label>
            <input className="login--form__input" type="email" id="brugernavn" />
          </div>
          <div className="login--form__wrapper">
            <label for="password">Password</label>
            <input className="login--form__input" type="password" id="password" />
          </div>
          <Button buttonname="Login" />
          <Link to="/">Glemt Password?</Link>

          <Link to="/Customer/Home">Customer</Link>
          <Link to="/Admin/Home">Admin</Link>
        </form>
        
      </div>
    </div>
  );
}


export default Login;
