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
import Comment from './components/Comment';
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
                  <Headline title="Message" />
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
            </Route>

            <Route exact path="/Customer/Terms">
               <NavCustomer />
               <div className="content">
                  <Headline title="Vilkår" />
                  <Message messagetitle="Overskrift" messagedate="" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
            </Route>

            <Route exact path="/Customer/Button">
               <NavCustomer />
               <div className="content">
                  <Headline title="Button" />
                  <Button buttonname="Send" />
               </div>
            </Route>

            <Route path="/Prices">
            <NavCustomer />
               <div className="content">
               <Prices />
               </div>
            </Route>
            <Route path="/Tomgods">
            <NavCustomer />
               <div className="content">
               <Tomgods />
               </div>
            </Route>
            <Route path="/Svind">
            <NavCustomer />
               <div className="content">
               <Svind />
               </div>
            </Route>


            <Route exact path="/Admin/Home">
             <NavAdmin />   
               <Admin />
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
