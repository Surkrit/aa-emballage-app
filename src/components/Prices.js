import React from 'react';
import Headline from './Headline';
import Button from './Button'
import '../style/App.css';

function EmbaRow({name, EmbaName}) {
  return (
    <tr>
        <td>{EmbaName}</td>
        <td><input type="number" name={name} /></td>
        <td>kr pr. stk.</td>
    </tr>
  );
}

function Prices() {
  return (
    <div className="prices">
      <Headline title="Prisliste" />
      <form>
        <table>
          <EmbaRow EmbaName="T5 Rfid CC" name="t5rfidcc"/>
          <EmbaRow EmbaName="Hylder" name="hylder"/>
          <EmbaRow EmbaName="Forl." name="forl"/>
          <EmbaRow EmbaName="Rfid CC"name="rfidcc"/>
          <EmbaRow EmbaName="½ Rfid CC" name="½rfidcc"/>
          <EmbaRow EmbaName="½ hylde" name="½hylde"/>
          <EmbaRow EmbaName="½ CC" name="½cc"/>
          <EmbaRow EmbaName="DS ½CC" name="ds½cc"/>
          <EmbaRow EmbaName="DS ½Hylde" name="ds½hylde"/>
          <EmbaRow EmbaName="Eupl" name="eupl"/>
          <EmbaRow EmbaName="½ Pll" name="½pll"/>
          <EmbaRow EmbaName="¼ Pll" name="¼pll"/>
          <EmbaRow EmbaName="CC" name="cc"/>
          <EmbaRow EmbaName="Søjlerør" name="sojleror"/>
        </table>
        <Button buttonname="Opdater"/>
      </form>
    </div>
  );
}
   
export default Prices;