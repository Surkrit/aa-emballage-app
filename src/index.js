/* React */ 
import React from 'react';
import ReactDOM from 'react-dom';
/* Stylesheets */
import './index.css';
/* Components */
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Button from './components/Button';
import Emballage from './components/Emballage';
import Headline from './components/Headline';
import Message from './components/Message';

/* React Router */
import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";


ReactDOM.render(
   <>
   <div className="main">

      <Router>
         <Nav />

         <div className="content">
     
         <Switch>
            <Route exact path="/">
               <Headline title="Hej Katja" />
               <Emballage />
               
            
            </Route>
            <Route path="/Message">
               <Headline title="Beskeder" />
               <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
               <Message messagetitle="Heading" messagedate="15/11/2020" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
               <Message messagetitle="Titres" messagedate="14/11/2020" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
               <Message messagetitle="Bóveda" messagedate="13/11/2020" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
            </Route>
            <Route path="/Terms">
               <Headline title="Vilkår" />
               <Message messagetitle="Overskrift" messagedate="" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
               <Message messagetitle="Heading" messagedate="" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
               <Message messagetitle="Titres" messagedate="" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
               <Message messagetitle="Bóveda" messagedate="" message="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak." />
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
