import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DropDown from './components/DropDown';
import Comment from './components/Comment';



ReactDOM.render(
   <>
    <DropDown />
    <Comment comment="Spicy jalapeno bacon ipsum dolor amet cow shank buffalo pig shankle burgdoggen ribeye andouille bacon beef pork turducken kielbasa. Pork loin flank tenderloin porchetta brisket. Spare ribs pork chop corned beef tenderloin chislic pancetta alcatra pork belly rump meatloaf landjaeger doner strip steak."/>
    <Comment comment="Andouille jowl tri-tip spare ribs pastrami ground round. Pork flank spare ribs buffalo strip steak pastrami, tail biltong frankfurter. Ham hock cow tri-tip chislic capicola, tongue kevin. Ground round pork chop doner spare ribs boudin ball tip prosciutto pancetta swine tail alcatra. "/>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
