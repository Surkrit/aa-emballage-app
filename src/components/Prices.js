import React from 'react';
import Headline from './Headline';
import '../style/App.css';

class Prices extends React.Component {
   
    render() {
     return (
      <div>
        <Headline title="Prisliste" />
       <p>Priser</p>  
      </div>
     );
    }
   }
   
   export default Prices;