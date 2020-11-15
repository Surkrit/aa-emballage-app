import React from 'react';
import Headline from './Headline';
import '../style/App.css';

class Prices extends React.Component {
   
    render() {
     return (
      <div className="prices">
        <Headline title="Prisliste" />
         <form>
           <label>T5 RFID CC: <input type="number" name="t5rfidcc"/> kr pr. stk.</label>
           <label>HYLDER: <input type="number" name="hylder"/> kr pr. stk.</label>
           <label>FORL.: <input type="number" name="forl"/> kr pr. stk.</label>
           <label>RFID CC: <input type="number" name="rfidcc"/> kr pr. stk.</label>
           <label>½ RFID CC: <input type="number" name="½rfidcc"/> kr pr. stk.</label>
           <label>½ hylde: <input type="number" name="½hylde"/> kr pr. stk.</label>
           <label>½ CC: <input type="number" name="½cc"/> kr pr. stk.</label>
           <label>DS ½CC: <input type="number" name="ds½cc"/> kr pr. stk.</label>
           <label>DS ½HYLDE: <input type="number" name="ds½hylde"/> kr pr. stk.</label>
           <label>EUPL: <input type="number" name="eupl"/> kr pr. stk.</label>
           <label>½ PLL: <input type="number" name="½pll"/> kr pr. stk.</label>
           <label>¼ PLL: <input type="number" name="¼pll"/> kr pr. stk.</label>
           <label>CC: <input type="number" name="cc"/> kr pr. stk.</label>
           <label>SØJLERØR: <input type="number" name="sojleror"/> kr pr. stk.</label>
         </form>  
      </div>
     );
    }
   }
   
   export default Prices;