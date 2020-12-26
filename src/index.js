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
import App from './components/Table';
import Terms from './components/Terms';
import Login from './pages/login';
import Prices from './components/Prices';
import Tomgods from './components/Tomgods';
import Svind from './components/Svind';
import Footer from './components/Footer';
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
            
            <Route exact path="/Customer/Home">
               <div className="flex">
                  <NavCustomer />
                  <div className="content">
                     <div id="table"></div>
                     {/* <Emballage /> */}
                     <App />npm
                  </div>
               </div>
               <Footer />
               
            </Route>

            <Route exact path="/Customer/Profile">
            <div className="flex">
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
                  <Button buttonname="Rediger" />
               </div>
               </div>
               <Footer />
            </Route>

            <Route exact path="/Customer/Message">
            <div className="flex">
               <NavCustomer />
               <div className="content">
                  <Headline title="Beskeder" />
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
            </div>
            <Footer />
            </Route>

            <Route path="/Customer/Tomgods">
            <div className="flex">
               <NavCustomer />
                  <div className="content">
                  <Tomgods />
                  </div>
                  </div>
                  <Footer />
            </Route>
            
            <Route path="/Customer/Svind">
            <div className="flex">
               <NavCustomer />
                  <div className="content">
                  <Svind />
                  </div>
                  </div>
            
            <Footer />
            </Route>


            <Route exact path="/Admin/Home">
            <div className="flex">
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
            <Footer />
            </Route>

            <Route exact path="/Admin/Terms">
            <div className="flex">
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
            <Footer />
            </Route>

            <Route path="/Admin/Prices">
            <div className="flex">
               <NavAdmin />
               <div className="content">
                  <Prices />
               </div>
            </div>
            <Footer />
            </Route>
         </Switch>
         
      </Router>

    </div>,
  document.getElementById('root')
);

reportWebVitals();
