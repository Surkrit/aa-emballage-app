/* React */ 
import React from 'react';
import ReactDOM from 'react-dom';
/* Stylesheets */
import './index.css';
/* Components */
import reportWebVitals from './reportWebVitals';
import NavCustomer from './components/NavCustomer';
import NavAdmin from './components/NavAdmin';
import Button from './components/Button';
import Emballage from './components/Emballage';
import Headline from './components/Headline';
import Message from './components/Message';
import MessageField from './components/MessageField';
import Terms from './components/Terms';
import Login from './pages/login';
import PricesOpdate from './components/PricesOpdate';
import Prices from './components/Prices';
import Tomgods from './components/Tomgods';
import Svind from './components/Svind';
import FooterCustomer from './components/FooterCustomer';
import FooterAdmin from './components/FooterAdmin';
import logo from "./images/aa-logo-big.png"; // with import
/* React Router */
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";


ReactDOM.render(
   <div className="main">

      <Router>
         <Switch>
            <Route exact path="/">
               <Login />
            </Route>

            <Route exact path="/ForgotPassword">
               <div className="login--wrapper">
                  <div className="login--wrapper__image"></div>
                  <img src={logo} className="app-logo" alt="logo" />
                  <div className="login--wrapper__content">
                     <Link to="/">Tilbage</Link>
                     <h2>Dette er en dummyside til Alex Andersens kommende Emballageside</h2>
                     <p>For at logge ind på "Kunde" siden, skal du skrive "Bruger" som Brugernavn og Password</p>
                     <p>For at logge ind på "Admin" siden, skal du skrive "Admin" som Brugernavn og Password</p>
                  </div>
               </div>
            </Route>
            
            <Route exact path="/Customer/Home">
               <div className="flex">
               <div className="content--backround"></div>
                  <NavCustomer />
                  <div className="content">
                     <Emballage />
                  </div>
               </div>
               <FooterCustomer />
               
            </Route>

            <Route exact path="/Customer/Profile">
            <div className="flex">
            <div className="content--backround"></div>
               <NavCustomer />
               <div className="content">
                  <Headline title="Profil" />
                  <div className="profile.--wrapper">
                     <div className="profile--wrapper__content">
                        <h3>Butik</h3>
                        <p>515254</p>
                        <p>Bilka Odense - 1654</p>
                        <p>Niels Bohrs Alle 150</p>
                        <p>5230 Odense</p>
                     </div>

                     <div className="profile--wrapper__content">
                        <h3>Kontaktperson</h3>
                        <p>Lone Hansen</p>
                        <p>+45 87 392 614</p>
                        <p>Lonha@alex-andersen.dk</p>
                     </div>
                  </div>
               </div>
               </div>
               <FooterCustomer />
            </Route>

            <Route exact path="/Customer/Message">
            <div className="flex">
            <div className="content--backround"></div>
               <NavCustomer />
               <div className="content">
                  <Headline title="Beskeder" />
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
            </div>
            <FooterCustomer />
            </Route>

            <Route path="/Customer/Tomgods">
            <div className="flex">
            <div className="content--backround"></div>
               <NavCustomer />
                  <div className="content">
                  <Tomgods />
                  </div>
                  </div>
                  <FooterCustomer />
            </Route>
            
            <Route path="/Customer/Svind">
            <div className="flex">
            <div className="content--backround"></div>
               <NavCustomer />
                  <div className="content">
                  <Svind />
                  </div>
                  </div>
            
            <FooterCustomer />
            </Route>

            <Route exact path="/Customer/Terms">
               <div className="flex">
               <div className="content--backround"></div>
                  <NavCustomer />
                  <div className="content">
                   <Headline title="Vilkår" />
                  </div>
               </div>
               <FooterCustomer />
               
            </Route>

            <Route exact path="/Customer/Prices">
               <div className="flex">
               <div className="content--backround"></div>
                  <NavCustomer />
                  <div className="content">
                     <Prices />
                  </div>
               </div>
               <FooterCustomer />
               
            </Route>


            <Route exact path="/Admin/Home">
            <div className="flex">
            <div className="content--backround"></div>
             <NavAdmin />   
             <div className="content">
                  <Headline title="Beskeder" />
                  <MessageField message=""/>
                  <div className="flex--end"><Button buttonname="Send" /></div>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
            </div>
            <FooterAdmin />
            </Route>

            <Route exact path="/Admin/Terms">
            <div className="flex">
            <div className="content--backround"></div>
               <NavAdmin />
               <div className="content">
                  <Headline title="Vilkår" />
                  <form>
                     <Terms />
                     <Terms />
                     <Terms />
                     <Terms />
                     <Button buttonname="Opdater" />  
                  </form>
                  </div>
            </div>
            <FooterAdmin />
            </Route>

            <Route path="/Admin/Prices">
            <div className="flex">
            <div className="content--backround"></div>
               <NavAdmin />
               <div className="content">
                  <PricesOpdate />
               </div>
            </div>
            <FooterAdmin />
            </Route>
         </Switch>
         
      </Router>

    </div>,
  document.getElementById('root')
);

reportWebVitals();
