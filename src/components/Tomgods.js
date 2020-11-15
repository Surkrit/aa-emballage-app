import React from 'react';
import Headline from './Headline';
import Button from './Button';
import '../style/App.css';

class Tomgods extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
   
    render() {
     return (
      <div className="tomgods">
        <Headline title="Tomgods" />
         <form  onSubmit={this.handleSubmit}>
           <label className="tomgods-date">Dato <input type="date"/></label>
           <table>
             <tr>
               <th>T5 RFID CC</th>
               <th>HYLDER</th>
               <th>FORL.</th>
               <th>RFID CC</th>
               <th>½ RFID CC</th>
               <th>½ hylde</th>
               <th>½ CC</th>
               <th>DS ½CC</th>
               <th>DS ½HYLDE</th>
               <th>EUPL</th>
               <th>½ PLL</th>
               <th>¼ PLL</th>
               <th>CC</th>
               <th>SØJLERØR</th>
             </tr>
             <tr>
               <td><input type="number" name="t5rfidcc" value={this.state.value} onChange={this.handleChange}/></td>
               <td><input type="number" name="hylder" value={this.state.value} onChange={this.handleChange}/></td>
               <td><input type="number" name="forl"/></td>
               <td><input type="number" name="rfidcc"/></td>
               <td><input type="number" name="½rfidcc"/></td>
               <td><input type="number" name="½hylde"/></td>
               <td><input type="number" name="½cc"/></td>
               <td><input type="number" name="ds½cc"/></td>
               <td><input type="number" name="ds½hylde"/></td>
               <td><input type="number" name="eupl"/></td>
               <td><input type="number" name="½pll"/></td>
               <td><input type="number" name="¼pll"/></td>
               <td><input type="number" name="cc"/></td>
               <td><input type="number" name="sojleror"/></td>
             </tr>
           </table>
           <Button buttonname="Bestil"/>
         </form>  
      </div>
     );
    }
   }
   
   export default Tomgods;