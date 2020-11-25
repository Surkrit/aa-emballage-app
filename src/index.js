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
import Terms from './components/Terms';
import Login from './pages/login';
import Admin from './pages/admin';
import Prices from './components/Prices';
import Tomgods from './components/Tomgods';
import Svind from './components/Svind';
/* React Router */
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";


ReactDOM.render(
   <> 
   <div className="main">

      <Router>
         <Switch>
            <Route exact path="/">
               <Login />
            </Route>
            
            <Route exact path="/Customer/Home">
               <NavCustomer />
               <div className="content">
                  <Emballage />
               </div>
            </Route>

            <Route exact path="/Customer/Message">
               <NavCustomer />
               <div className="content">
                  <Headline title="Beskeder" />
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
            </Route>

            <Route path="/Customer/Tomgods">
            <NavCustomer />
               <div className="content">
               <Tomgods />
               </div>
            </Route>
            <Route path="/Customer/Svind">
            <NavCustomer />
               <div className="content">
               <Svind />
               </div>
            </Route>


            <Route exact path="/Admin/Home">
             <NavAdmin />   
               <Admin />
            </Route>

            <Route exact path="/Admin/Terms">
               <NavAdmin />
               <div className="content">
                  <Headline title="Vilkår" />
                  <Terms />
                  <Terms />
                  <Terms />
                  <Terms />
                  <Button buttonname="Opdater" />  
               </div>
            </Route>

            <Route path="/Admin/Prices">
               <NavAdmin />
               <div className="content">
                  <Prices />
               </div>
            </Route>
         </Switch>
         
      </Router>

    </div>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
