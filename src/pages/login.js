import React from "react";
import "../style/App.css";
import logo from "../images/aa-logo-big.png"; // with import
import Headline from "../components/Headline";
import Button from "../components/Button";
import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  //Skaber redirecting via formen
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  //Mulighed for at ændre staten direkte i browseren ved indtastning i formen
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  //Funktionen bliver først aktiveret, når formen bliver indsendt
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ username: event.target.value });
    if(this.state.username === "Admin" || this.state.username === "admin"){
      this.setState({ redirect: "/Admin/Home" });
    }
    if(this.state.username === "Bruger" || this.state.username === "bruger"){
      this.setState({ redirect: "/Customer/Home" });
    }
  }
  render() {
    return (
        <div className="login--wrapper">
          <Redirect to={this.state.redirect} />
          <div className="login--wrapper__image"></div>
          <img src={logo} className="app-logo" alt="logo" />
          <div className="login--wrapper__content">
            <Headline title="Velkommen" />

            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lacinia tempor egestas. Nullam enim erat, consequat et nisi eget,
              pellentesque sodales justo. Etiam ut iaculis nibh. Suspendisse
              nulla libero, sagittis ut justo sit amet, volutpat venenatis elit.
              Donec fermentum posuere nisi tempor auctor.{" "}
            </p>
            {/* I stedet for action til at lave en redirection bliver der brugt onSubmit, som går ind og peger på mySubmitHandler funktionen */}
            <form className="login--form" onSubmit={this.mySubmitHandler}>
              <div className="login--form__wrapper">
                <label for="brugernavn">Brugernavn</label>
                <input
                  className="login--form__input"
                  type="text"
                  id="brugernavn"
                  onChange={this.myChangeHandler}
                />
              </div>
              <div className="login--form__wrapper">
                <label for="password">Password</label>
                <input
                  className="login--form__input"
                  type="password"
                  id="password"
                />
              </div>
              <Button buttonname="Login" />
              <Link to="/">Glemt Password?</Link>
            </form>
          </div>
        </div>
    );
  }
}


export default Login;
