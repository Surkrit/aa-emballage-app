import React, { useState } from 'react';
import Headline from './Headline';
import Button from './Button';
import Comment from "./Comment";
import '../style/App.css';

const initialTomgods = Object.freeze({
  id: Math.floor(Math.random() * 10000),
  tomgodsDate: '',
  t5RfidCc: '',
  hylder: '',
  forl: '',
  rfidCc: '',
  halfRfidCc: '',
  halfHylde: '',
  halfCc: '',
  dsHalfCc: '',
  dsHalfHylde: '',
  eupl: '',
  halfPll: '',
  quartPll: '',
  cc: '',
  sojleror: ''
});

const Tomgods = () => {
  const [formData, updateFormData] = useState(initialTomgods);
  
  const handleChange = (e) => {
      updateFormData({
          ...formData,
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
      });
  };
  
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      // ... submit to API or something
  };
  
  return (
    <div className="tomgods">
      <Headline title="Tomgods" />
      <>
      <form >
        <label className="tomgods-date">Dato <input type="date" name="tomgodsDate" onChange={handleChange}/></label>
        <table>
          <thead>
            <tr>
              <th>T5 Rfid CC</th>
              <th>Hylder</th>
              <th>Forl.</th>
              <th>Rfid CC</th>
              <th>½ Rfid CC</th>
              <th>½ Hylde</th>
              <th>½ CC</th>
              <th>DS ½CC</th>
              <th>DS ½Hylde</th>
              <th>Eupl</th>
              <th>½ Pll</th>
              <th>¼ Pll</th>
              <th>CC</th>
              <th>Søjlerør</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="number" name="t5RfidCc" onChange={handleChange}/></td>
              <td><input type="number" name="hylder" onChange={handleChange}/></td>
              <td><input type="number" name="forl" onChange={handleChange}/></td>
              <td><input type="number" name="rfidCc" onChange={handleChange}/></td>
              <td><input type="number" name="halfRfidCc" onChange={handleChange}/></td>
              <td><input type="number" name="halfHylde" onChange={handleChange}/></td>
              <td><input type="number" name="halfCc" onChange={handleChange}/></td>
              <td><input type="number" name="dsHalfCc" onChange={handleChange}/></td>
              <td><input type="number" name="dsHalfHylde" onChange={handleChange}/></td>
              <td><input type="number" name="eupl" onChange={handleChange}/></td>
              <td><input type="number" name="halfPll" onChange={handleChange}/></td>
              <td><input type="number" name="quartPll" onChange={handleChange}/></td>
              <td><input type="number" name="cc" onChange={handleChange}/></td>
              <td><input type="number" name="sojleror" onChange={handleChange}/></td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleSubmit}>Submit</button>
        {/* <Button buttonname="Bestil"/> */}
      </form>
      </>   

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Dato</th>
            <th>T5 Rfid CC</th>
            <th>Hylder</th>
            <th>Forl.</th>
            <th>Rfid CC</th>
            <th>½ Rfid CC</th>
            <th>½ Hylde</th>
            <th>½ CC</th>
            <th>DS ½CC</th>
            <th>DS ½Hylde</th>
            <th>Eupl</th>
            <th>½ Pll</th>
            <th>¼ Pll</th>
            <th>CC</th>
            <th>Søjlerør</th>
            <th>Kommentar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{<input type="number" name=""/>}</td>
            <td><input type="number" name=""/></td>
            <td><input type="number" name="t5RfidCc"/></td>
            <td><input type="number" name="hylder"/></td>
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
            <td><Comment/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
   
export default Tomgods;