import "../style/App.css";
import Headline from "./Headline";
import Comment from "./Comment";

function Emballage() {
  return (
    <>
      <Headline title="Emballageoversigt" />
      <div className="emballage-date">
        <p>Fra dato:</p> <input type="date" />
      </div>
      <div className="emballage-date">
        <p>Til dato:</p> <input type="date" />
      </div>

      <div class="emballage-buttons">
        <button>Afleveret/returneret</button>
        <button>Balance</button>
      </div>

      <table>
        <tr>
          <th>
            <h4>#</h4>
          </th>
          <th>
            <h4>Accep. af AA</h4>
          </th>
          <th>
            <h4>Accep.</h4>
          </th>
          <th>
            <h4>Kvitterings nr.</h4>
          </th>
          <th>
            <h4>Tur nr.</h4>
          </th>
          <th>
            <h4>Dato</h4>
          </th>
          <Type FullName="T5 RFID CC" />
          <Type FullName="HYLDER" />
          <Type FullName="FORL." />
          <Type FullName="RFID CC" />
          <Type FullName="½ RFID CC" />
          <Type FullName="½ hylde" />
          <Type FullName="½ CC" />
          <Type FullName="DS ½CC" />
          <Type FullName="DS ½HYLDE" />
          <Type FullName="EUPL" />
          <Type FullName="½ PLL" />
          <Type FullName="¼ PLL" />
          <Type FullName="CC" />
          <Type FullName="SØJLERØR" />
          <th>
            <h4>Signeret</h4>
          </th>
          <th>
            <h4>Kommentar</h4>
          </th>
          <th>
            <h4>PDF</h4>
          </th>
        </tr>
        <Row />
        
      </table>
    </>
  );
}

function Type({ FullName }) {
  return (
    <th>
      <h4>{FullName}</h4>
    </th>
  );
}

function Row({ FullName }) {
  return (
    <>
      <tr>
        <td>
          <h4>1</h4>
        </td>
        <td>
          <h4>
            <input type="checkbox" />
          </h4>
        </td>
        <td>
          <h4>
            <input type="checkbox" />
          </h4>
        </td>
        <td>
          <h4>DK2935541</h4>
        </td>
        <td>
          <h4>93197</h4>
        </td>
        <td>
          <h4>05-11-2020</h4>
        </td>
        <td className="row--red">
          <h4>45</h4>
        </td>
        <td className="row--red">
          <h4>7</h4>
        </td>
        <td className="row--red">
          <h4>21</h4>
        </td>
        <td className="row--red">
          <h4>4</h4>
        </td>
        <td className="row--red">
          <h4>6</h4>
        </td>
        <td className="row--red">
          <h4> </h4>
        </td>
        <td className="row--red">
          <h4>6</h4>
        </td>
        <td className="row--red">
          <h4>1</h4>
        </td>
        <td className="row--red">
          <h4>2</h4>
        </td>
        <td className="row--red">
          <h4>54</h4>
        </td>
        <td className="row--red">
          <h4> </h4>
        </td>
        <td className="row--red">
          <h4> </h4>
        </td>
        <td className="row--red">
          <h4>1</h4>
        </td>
        <td className="row--red">
          <h4>8</h4>
        </td>
        <td>
          <h4>
            <input type="checkbox" />
          </h4>
        </td>
        <td>
          <button>Indsæt</button>
          <h4>
            {/* <Comment comment="hfsjljalkjdkla" /> */}
          </h4>
        </td>
        <td>
          <h4>♥</h4>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="row--green">
          <h4>4</h4>
        </td>
        <td className="row--green">
          <h4>7</h4>
        </td>
        <td className="row--green">
          <h4>21</h4>
        </td>
        <td className="row--green">
          <h4>4</h4>
        </td>
        <td className="row--green">
          <h4>6</h4>
        </td>
        <td className="row--green">
          <h4> </h4>
        </td>
        <td className="row--green">
          <h4>6</h4>
        </td>
        <td className="row--green">
          <h4>1</h4>
        </td>
        <td className="row--green">
          <h4>2</h4>
        </td>
        <td className="row--green">
          <h4>54</h4>
        </td>
        <td className="row--green">
          <h4> </h4>
        </td>
        <td className="row--green">
          <h4> </h4>
        </td>
        <td className="row--green">
          <h4>1</h4>
        </td>
        <td className="row--green">
          <h4>8</h4>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
}

export default Emballage;
