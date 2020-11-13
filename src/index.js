import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Button from './components/Button';
import Emballage from './components/Emballage';
import './style/temp.css'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
 import Prices from './components/Prices';


ReactDOM.render(
   <>
   <div className="main">

      <Router>
         <Nav />

         <div className="content">
     
         <Switch>
            <Route exact path="/">
               <Emballage />
               
            
            </Route>
            <Route path="/Message">
               <h1>Dette er message siden</h1>
            </Route>
            <Route path="/Terms">
               
            </Route>
            <Route path="/Button">
               <Button buttonname="Send"/>
               <Button buttonname="Indsend"/>
               <Button buttonname="Bestil"/>
               <Button buttonname="Login"/>
            </Route>
         </Switch>
         </div>
      </Router>

    </div>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
