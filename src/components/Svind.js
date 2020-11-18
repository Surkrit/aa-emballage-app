import React from 'react';
import Headline from './Headline';
import Button from './Button';
import Pagination from './Pagination';
import '../style/App.css';

class Svind extends React.Component {
   
    render() {
     return (
      <div className="svind">
        <Headline title="Svindopgørelse" />
        <form>
           <label className="svind-date">Dato <input type="date"/></label>
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
               <td><input type="number" name="t5rfidcc"/></td>
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
             </tr>
           </table>
           <Button buttonname="Indsend"/>
         </form>
         <div>
          <Pagination totalRecords={100} pageLimit={5} pageNeighbours={1} onPageChanged={this.onPageChanged} />
        </div>
      </div>
     );
    }
   }
   
   export default Svind;