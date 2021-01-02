import React from 'react';
import Headline from './Headline';
import '../style/App.css';

function EmbaRow({EmbaName, value}) {
  return (
    <tr>
        <td>{EmbaName}</td>
        <td className="prices__number">{value}</td>
        <td>kr pr. stk.</td>
    </tr>
  );
}

function Prices() {
  return (
    <div className="prices">
      <Headline title="Prisliste" />
        <table>
          <tbody>
            <EmbaRow EmbaName="T5 Rfid CC" name="t5RfidCc" value={3000}/>
            <EmbaRow EmbaName="Hylder" name="hylder" value={200}/>
            <EmbaRow EmbaName="Forl." name="forl" value={20}/>
            <EmbaRow EmbaName="Rfid CC"name="rfidCc" value={1000}/>
            <EmbaRow EmbaName="½ Rfid CC" name="halfRfidCc" value={600}/>
            <EmbaRow EmbaName="½ hylde" name="halfHylde" value={120}/>
            <EmbaRow EmbaName="½ CC" name="halfCc" value={1500}/>
            <EmbaRow EmbaName="DS ½CC" name="dsHalfCc" value={1200}/>
            <EmbaRow EmbaName="DS ½Hylde" name="dsHalfHylde" value={100}/>
            <EmbaRow EmbaName="Eupl" name="eupl" value={100}/>
            <EmbaRow EmbaName="½ Pll" name="halfPll" value={70}/>
            <EmbaRow EmbaName="¼ Pll" name="quartPll" value={40}/>
            <EmbaRow EmbaName="CC" name="cc" value={2000}/>
            <EmbaRow EmbaName="Søjlerør" name="sojleror" value={50}/>
          </tbody>
        </table>
    </div>
  );
}
   
export default Prices;