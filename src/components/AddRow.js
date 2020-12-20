import React, { useState } from 'react';
// import Button from './Button';
import Comment from "./Comment";
import PropTypes from 'prop-types';
import '../style/App.css';

const initialRow = {
  id: '',
  date: '',
  t5RfidCc: 0,
  hylder: 0,
  forl: 0,
  rfidCc: 0,
  halfRfidCc: 0,
  halfHylde: 0,
  halfCc: 0,
  dsHalfCc: 0,
  dsHalfHylde: 0,
  eupl: 0,
  halfPll: 0,
  quartPll: 0,
  cc: 0,
  sojleror: 0,
  comment: '',
  subRows: undefined,
}

const AddRow = props => {
  const [input, setInput] = useState(initialRow)
  const { addRowHandler } = props


  const handleAdd = event => {
    addRowHandler(input)
    setInput(initialRow)
  }

  const handleChange = name => ({ target: { value } }) => {
    setInput({ ...input, [name]: value })
  }

  return (
    <div className="add-row">
      <label className="add-row__date">Dato <input type="date" name="date" onChange={handleChange('date')}/></label>
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
              <th>Kommentar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="number" name="t5RfidCc" value={input.t5RfidCc} onChange={handleChange('t5RfidCc')} /></td>
              <td><input type="number" name="hylder" value={input.hylder} onChange={handleChange('hylder')} /></td>
              <td><input type="number" name="forl" value={input.forl} onChange={handleChange('forl')} /></td>
              <td><input type="number" name="rfidCc" value={input.rfidCc} onChange={handleChange('rfidCc')} /></td>
              <td><input type="number" name="halfRfidCc" value={input.halfRfidCc} onChange={handleChange('halfRfidCc')} /></td>
              <td><input type="number" name="halfHylde" value={input.halfHylde} onChange={handleChange('halfHylde')} /></td>
              <td><input type="number" name="halfCc" value={input.halfCc} onChange={handleChange('halfCc')} /></td>
              <td><input type="number" name="dsHalfCc" value={input.dsHalfCc} onChange={handleChange('dsHalfCc')} /></td>
              <td><input type="number" name="dsHalfHylde" value={input.dsHalfHylde} onChange={handleChange('dsHalfHylde')} /></td>
              <td><input type="number" name="eupl" value={input.eupl} onChange={handleChange('eupl')} /></td>
              <td><input type="number" name="halfPll" value={input.halfPll} onChange={handleChange('halfPll')} /></td>
              <td><input type="number" name="quartPll" value={input.quartPll} onChange={handleChange('quartPll')} /></td>
              <td><input type="number" name="cc" value={input.cc} onChange={handleChange('cc')} /></td>
              <td><input type="number" name="sojleror" value={input.sojleror} onChange={handleChange('sojleror')} /></td>
              <td>{/* <Comment /> */}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleAdd} className="button--green">
            Send
        </button>
    </div>
  )
}

AddRow.propTypes = {
  addRowHandler: PropTypes.func.isRequired,
}

export default AddRow