import React, { useState } from 'react';
// import Button from './Button';
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
  // comment: '',
  subRows: undefined,
}

const AddRow = props => {
  const [input, setInput] = useState(initialRow)
  const { addRowHandler, buttonName } = props


  const handleAdd = event => {
    addRowHandler(input)
    setInput(initialRow)
  }

  const handleChange = name => ({ target: { value } }) => {
    setInput({ ...input, [name]: value })
  }

  return (
    <div className="add-row">
      <label className="add-row__date">Dato <input type="date" name="date" value={input.date} onChange={handleChange('date')}/></label>
        <div class="table-data">
        <table>
          <thead>
            <tr>
              <th><h4>T5 Rfid CC</h4></th>
              <th><h4>Hylder</h4></th>
              <th><h4>Forl.</h4></th>
              <th><h4>Rfid CC</h4></th>
              <th><h4>½ Rfid CC</h4></th>
              <th><h4>½ Hylde</h4></th>
              <th><h4>½ CC</h4></th>
              <th><h4>DS ½CC</h4></th>
              <th><h4>DS ½Hylde</h4></th>
              <th><h4>Eupl</h4></th>
              <th><h4>½ Pll</h4></th>
              <th><h4>¼ Pll</h4></th>
              <th><h4>CC</h4></th>
              <th><h4>Søjlerør</h4></th>
              {/* <th>Kommentar</th> */}
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
              {/* <td><Comment /></td> */}
            </tr>
          </tbody>
        </table>
        </div>
        <button onClick={handleAdd} className="button--green">
            {buttonName}
        </button>
    </div>
  )
}

AddRow.propTypes = {
  addRowHandler: PropTypes.func.isRequired,
}

export default AddRow