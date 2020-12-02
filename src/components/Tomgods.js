import React, { useState } from 'react';
import Headline from './Headline';
import Button from './Button';
import Comment from "./Comment";
import '../style/App.css';

/* const initialTomgods = Object.freeze({
  id: Math.floor(Math.random() * 10000),
  tomgodsDate: "",
  t5RfidCc: "",
  hylder: "",
  forl: "",
  rfidCc: "",
  halfRfidCc: "",
  halfHylde: "",
  halfCc: "",
  dsHalfCc: "",
  dsHalfHylde: "",
  eupl: "",
  halfPll: "",
  quartPll: "",
  cc: "",
  sojleror: ""
}); */

const initialTomgods = [
  {
    id: '1',
    tomgodsDate: '2020-11-29',
    t5RfidCc: '2',
    hylder: '',
    forl: '',
    rfidCc: '',
    halfRfidCc: '',
    halfHylde: '',
    halfCc: '',
    dsHalfCc: '',
    dsHalfHylde: '',
    eupl: '32',
    halfPll: '14',
    quartPll: '17',
    cc: '1',
    sojleror: '4,',
    comment: 'Hvor er noget ØL!!'
  },
  {
    id: '2',
    tomgodsDate: '2020-12-01',
    t5RfidCc: '4',
    hylder: '2',
    forl: '1',
    rfidCc: '1',
    halfRfidCc: '',
    halfHylde: '2',
    halfCc: '',
    dsHalfCc: '5',
    dsHalfHylde: '',
    eupl: '18',
    halfPll: '7',
    quartPll: '2',
    cc: '',
    sojleror: '10,',
    comment: 'Jeg vil have ØL!!'
  },
];

const Tomgods = () => {
  const [value, setValue] = useState('');
  const [tomgods, setTomgods] = useState(initialTomgods);
 
  const handleChange = event => {
    setValue(event.target.value);
  };
 
  const handleSubmit = event => {
    if (value) {
      setTomgods(tomgods.concat(value));
    }
 
    setValue('');
 
    event.preventDefault();
  };

/* const Tomgods = () => {
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
  }; */
  
  return (
    <div className="tomgods">
      <Headline title="Tomgods" />
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <Button buttonname="Bestil"/>
      </form>
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
        {tomgods.map(item => (
          <tr>
            <td key={item.id}>{item.id} </td>
            <td key={item.tomgodsDate}>{item.tomgodsDate}</td>
            <td key={item.t5RfidCc}>{item.t5RfidCc}</td>
            <td key={item.hylder}>{item.hylder}</td>
            <td key={item.forl}>{item.forl}</td>
            <td key={item.rfidCc}>{item.rfidCc}</td>
            <td key={item.halfRfidCc}>{item.halfRfidCc}</td>
            <td key={item.halfHylde}>{item.halfHylde}</td>
            <td key={item.halfCc}>{item.halfCc}</td>
            <td key={item.dsHalfCc}>{item.dsHalfCc}</td>
            <td key={item.dsHalfHylde}>{item.dsHalfHylde}</td>
            <td key={item.eupl}>{item.eupl}</td>
            <td key={item.halfPll}>{item.halfPll}</td>
            <td key={item.quartPll}>{item.quartPll}</td>
            <td key={item.cc}>{item.cc}</td>
            <td key={item.sojleror}>{item.sojleror}</td>
            <td key={item.comment}>{item.comment}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

/*   return (
    <div className="tomgods">
      <Headline title="Tomgods" />
      
      <form>
      <>
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
        {/* <Button buttonname="Bestil"/> */
/*         </> 
      </form>
        

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
        <Gods/>
      </table>
    </div>
  );
}
 */

export default Tomgods;