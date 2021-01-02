import React, { useState } from 'react';
import Headline from './Headline';
import Button from './Button'
import '../style/App.css';

const initialPrice = {
  t5RfidCc: 3000,
  hylder: 200,
  forl: 20,
  rfidCc: 1000,
  halfRfidCc: 600,
  halfHylde: 120,
  halfCc: 1500,
  dsHalfCc: 1200,
  dsHalfHylde: 100,
  eupl: 100,
  halfPll: 70,
  quartPll: 40,
  cc: 2000,
  sojleror: 50,
}

function EmbaRow({name, EmbaName, onChange, value}) {
  return (
    <tr>
        <td>{EmbaName}</td>
        <td><input type="number" name={name} value={value} onChange={onChange}/></td>
        <td>kr pr. stk.</td>
    </tr>
  );
}

function PricesOpdate() {
  const [input, setInput] = useState(initialPrice)

  const handleChange = name => ({ target: { value } }) => {
    setInput({ ...input, [name]: value })
  }
  return (
    <div className="prices">
      <Headline title="Prisliste" />
      <form>
        <table>
          <tbody>
            <EmbaRow EmbaName="T5 Rfid CC" name="t5RfidCc" value={input.t5RfidCc} onChange={handleChange('t5RfidCc')}/>
            <EmbaRow EmbaName="Hylder" name="hylder" value={input.hylder} onChange={handleChange('hylder')}/>
            <EmbaRow EmbaName="Forl." name="forl" value={input.forl} onChange={handleChange('forl')}/>
            <EmbaRow EmbaName="Rfid CC"name="rfidCc" value={input.rfidCc} onChange={handleChange('rfidCc')}/>
            <EmbaRow EmbaName="½ Rfid CC" name="halfRfidCc" value={input.halfRfidCc} onChange={handleChange('halfRfidCc')}/>
            <EmbaRow EmbaName="½ hylde" name="halfHylde" value={input.halfHylde} onChange={handleChange('halfHylde')}/>
            <EmbaRow EmbaName="½ CC" name="halfCc" value={input.halfCc} onChange={handleChange('halfCc')}/>
            <EmbaRow EmbaName="DS ½CC" name="dsHalfCc" value={input.dsHalfCc} onChange={handleChange('dsHalfCc')}/>
            <EmbaRow EmbaName="DS ½Hylde" name="dsHalfHylde" value={input.dsHalfHylde} onChange={handleChange('dsHalfHylde')}/>
            <EmbaRow EmbaName="Eupl" name="eupl" value={input.eupl} onChange={handleChange('eupl')}/>
            <EmbaRow EmbaName="½ Pll" name="halfPll" value={input.halfPll} onChange={handleChange('halfPll')}/>
            <EmbaRow EmbaName="¼ Pll" name="quartPll" value={input.quartPll} onChange={handleChange('quartPll')}/>
            <EmbaRow EmbaName="CC" name="cc" value={input.cc} onChange={handleChange('cc')}/>
            <EmbaRow EmbaName="Søjlerør" name="sojleror" value={input.sojleror} onChange={handleChange('sojleror')}/>
          </tbody>
        </table>
        <Button buttonname="Opdater"/>
      </form>
    </div>
  );
}
   
export default PricesOpdate;