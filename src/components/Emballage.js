import React from 'react';
import "../style/App.css";
import Headline from "./Headline";
import Comment from "./Comment";
import DropDown from "./DropDown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Emballage() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Customer/Home">
            <Headline title="Emballageoversigt" />
            <div className="emballage-date">
              <p>Fra dato:</p> <input type="date" />
            </div>
            <div className="emballage-date">
              <p>Til dato:</p> <input type="date" />
            </div>

            <div className="table-buttons">
              <div className="emballage-buttons">
                <button className="button--active">
                  <Link to="Home">Afleveret/returneret</Link>
                </button>
                <button>
                  <Link to="Balance">Balance</Link>
                </button>
              </div>

              <DropDown />
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
              <RowAfleveret
                Id="1"
                AccepAA="yes"
                AccepKunde="yes"
                Kvittering="123698"
                Tur="90684"
                Dato="10-11-2020"
                T5RfidCCInn="12"
                HylderInn="2"
                ForlInn="4"
                RFIDccInn="3"
                halfRFIDccInn="45"
                halfHyldeInn="4"
                halfCCInn="11"
                DSHalfCCInn="13"
                DSHalfHyldeInn="1"
                EuplInn="5"
                HalfPllInn=""
                quartPllInn="4"
                CCInn="11"
                SojleInn="32"
                T5RfidCCOut="1"
                HylderOut=" "
                ForlOut="4"
                RFIDccOut="3"
                halfRFIDccOut="15"
                halfHyldeOut=""
                halfCCOut="4"
                DSHalfCCOut="33"
                DSHalfHyldeOut="1"
                EuplOut="5"
                HalfPllOut="3"
                quartPllOut="1"
                CCOut="1"
                SojleOut=""
                Signed="no"
                Kommentar="Det her en kommentar"
              />
              <RowAfleveret
                Id="1"
                AccepAA="yes"
                AccepKunde="yes"
                Kvittering="123698"
                Tur="90684"
                Dato="10-11-2020"
                T5RfidCCInn="12"
                HylderInn="2"
                ForlInn="4"
                RFIDccInn="3"
                halfRFIDccInn="45"
                halfHyldeInn="4"
                halfCCInn="11"
                DSHalfCCInn="13"
                DSHalfHyldeInn="1"
                EuplInn="5"
                HalfPllInn=""
                quartPllInn="4"
                CCInn="11"
                SojleInn="32"
                T5RfidCCOut="1"
                HylderOut=" "
                ForlOut="4"
                RFIDccOut="3"
                halfRFIDccOut="15"
                halfHyldeOut=""
                halfCCOut="4"
                DSHalfCCOut="33"
                DSHalfHyldeOut="1"
                EuplOut="5"
                HalfPllOut="3"
                quartPllOut="1"
                CCOut="1"
                SojleOut=""
                Signed="no"
                Kommentar="Det her en kommentar"
              />
              <RowAfleveret
                Id="1"
                AccepAA="yes"
                AccepKunde="yes"
                Kvittering="123698"
                Tur="90684"
                Dato="10-11-2020"
                T5RfidCCInn="12"
                HylderInn="2"
                ForlInn="4"
                RFIDccInn="3"
                halfRFIDccInn="45"
                halfHyldeInn="4"
                halfCCInn="11"
                DSHalfCCInn="13"
                DSHalfHyldeInn="1"
                EuplInn="5"
                HalfPllInn=""
                quartPllInn="4"
                CCInn="11"
                SojleInn="32"
                T5RfidCCOut="1"
                HylderOut=" "
                ForlOut="4"
                RFIDccOut="3"
                halfRFIDccOut="15"
                halfHyldeOut=""
                halfCCOut="4"
                DSHalfCCOut="33"
                DSHalfHyldeOut="1"
                EuplOut="5"
                HalfPllOut="3"
                quartPllOut="1"
                CCOut="1"
                SojleOut=""
                Signed="no"
                Kommentar="Det her en kommentar"
              />
            </table>
          </Route>

          <Route exact path="/Customer/Balance">
            <Headline title="Emballageoversigt" />
            <div className="emballage-date">
              <p>Fra dato:</p> <input type="date" />
            </div>
            <div className="emballage-date">
              <p>Til dato:</p> <input type="date" />
            </div>

            <div className="table-buttons">
              <div className="emballage-buttons">
                <button>
                  <Link to="Home">Afleveret/returneret</Link>
                </button>
                <button className="button--active">
                  <Link to="Balance">Balance</Link>
                </button>
              </div>

              <DropDown />
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
              <RowBalance
                Id="1"
                AccepAA="yes"
                AccepKunde="yes"
                Kvittering="123698"
                Tur="90684"
                Dato="10-11-2020"
                T5RfidCC="1"
                Hylder="2"
                Forl="4"
                RFIDcc="3"
                halfRFIDcc="45"
                halfHylde=""
                halfCC="4"
                DSHalfCC="13"
                DSHalfHylde="1"
                Eupl="5"
                HalfPll=""
                quartPll="1"
                CC="1"
                Sojle=""
                signed="no"
                Kommentar="Det her en kommentar"
              />
              <RowBalance
                Id="1"
                AccepAA="yes"
                AccepKunde="yes"
                Kvittering="123698"
                Tur="90684"
                Dato="10-11-2020"
                T5RfidCC="1"
                Hylder="2"
                Forl="4"
                RFIDcc="3"
                halfRFIDcc="45"
                halfHylde=""
                halfCC="4"
                DSHalfCC="13"
                DSHalfHylde="1"
                Eupl="5"
                HalfPll=""
                quartPll="1"
                CC="1"
                Sojle=""
                signed="no"
                Kommentar="Det her en kommentar"
              />
              <RowBalance
                Id="1"
                AccepAA="yes"
                AccepKunde="yes"
                Kvittering="123698"
                Tur="90684"
                Dato="10-11-2020"
                T5RfidCC="1"
                Hylder="2"
                Forl="4"
                RFIDcc="3"
                halfRFIDcc="45"
                halfHylde=""
                halfCC="4"
                DSHalfCC="13"
                DSHalfHylde="1"
                Eupl="5"
                HalfPll=""
                quartPll="1"
                CC="1"
                Sojle=""
                signed="no"
                Kommentar="Det her en kommentar"
              />
            </table>
          </Route>
        </Switch>
      </Router>
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

function RowAfleveret({
  Id,
  AccepAA,
  AccepKunde,
  Kvittering,
  Tur,
  Dato,
  T5RfidCCInn,
  HylderInn,
  ForlInn,
  RFIDccInn,
  halfRFIDccInn,
  halfHyldeInn,
  halfCCInn,
  DSHalfCCInn,
  DSHalfHyldeInn,
  EuplInn,
  HalfPllInn,
  quartPllInn,
  CCInn,
  SojleInn,
  T5RfidCCOut,
  HylderOut,
  ForlOut,
  RFIDccOut,
  halfRFIDccOut,
  halfHyldeOut,
  halfCCOut,
  DSHalfCCOut,
  DSHalfHyldeOut,
  EuplOut,
  HalfPllOut,
  quartPllOut,
  CCOut,
  SojleOut,
  Signed,
  Kommentar,
}) {
  return (
    <>
      <tr>
        <td>
          <h4>{Id}</h4>
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
          <h4>{Kvittering}</h4>
        </td>
        <td>
          <h4>{Tur}</h4>
        </td>
        <td>
          <h4>{Dato}</h4>
        </td>
        <td className="row--red">
          <h4>{T5RfidCCInn}</h4>
        </td>
        <td className="row--red">
          <h4>{HylderInn}</h4>
        </td>
        <td className="row--red">
          <h4>{ForlInn}</h4>
        </td>
        <td className="row--red">
          <h4>{RFIDccInn}</h4>
        </td>
        <td className="row--red">
          <h4>{halfRFIDccInn}</h4>
        </td>
        <td className="row--red">
          <h4>{halfHyldeInn}</h4>
        </td>
        <td className="row--red">
          <h4>{halfCCInn}</h4>
        </td>
        <td className="row--red">
          <h4>{DSHalfCCInn}</h4>
        </td>
        <td className="row--red">
          <h4>{DSHalfHyldeInn}</h4>
        </td>
        <td className="row--red">
          <h4>{EuplInn}</h4>
        </td>
        <td className="row--red">
          <h4>{HalfPllInn}</h4>
        </td>
        <td className="row--red">
          <h4>{quartPllInn}</h4>
        </td>
        <td className="row--red">
          <h4>{CCInn}</h4>
        </td>
        <td className="row--red">
          <h4>{SojleInn}</h4>
        </td>
        <td>
          <h4>
            <input type="checkbox" />
          </h4>
        </td>
        <td className="comment--row">
          <Comment />
          {/* <button className="showComment">Indsæt</button> */}
          {/* <Comment Kommentar={Kommentar} /> */}
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
          <h4>{T5RfidCCOut}</h4>
        </td>
        <td className="row--green">
          <h4>{HylderOut}</h4>
        </td>
        <td className="row--green">
          <h4>{ForlOut}</h4>
        </td>
        <td className="row--green">
          <h4>{RFIDccOut}</h4>
        </td>
        <td className="row--green">
          <h4>{halfRFIDccOut}</h4>
        </td>
        <td className="row--green">
          <h4>{halfHyldeOut}</h4>
        </td>
        <td className="row--green">
          <h4>{halfCCOut}</h4>
        </td>
        <td className="row--green">
          <h4>{DSHalfCCOut}</h4>
        </td>
        <td className="row--green">
          <h4>{DSHalfHyldeOut}</h4>
        </td>
        <td className="row--green">
          <h4>{EuplOut}</h4>
        </td>
        <td className="row--green">
          <h4>{HalfPllOut}</h4>
        </td>
        <td className="row--green">
          <h4>{quartPllOut}</h4>
        </td>
        <td className="row--green">
          <h4>{CCOut}</h4>
        </td>
        <td className="row--green">
          <h4>{SojleOut}</h4>
        </td>
        <td></td>
        <td>
          <h4>{Kommentar}</h4>
        </td>
        <td>
          <h4 className="empty">.</h4>
        </td>
      </tr>
    </>
  );
}

function RowBalance({
  Id,
  AccepAA,
  AccepKunde,
  Kvittering,
  Tur,
  Dato,
  T5RfidCC,
  Hylder,
  Forl,
  RFIDcc,
  halfRFIDcc,
  halfHylde,
  halfCC,
  DSHalfCC,
  DSHalfHylde,
  Eupl,
  HalfPll,
  quartPll,
  CC,
  Sojle,
  signed,
  Kommentar,
}) {
  return (
    <>
      <tr>
        <td>
          <h4>{Id}</h4>
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
          <h4>{Kvittering}</h4>
        </td>
        <td>
          <h4>{Tur}</h4>
        </td>
        <td>
          <h4>{Dato}</h4>
        </td>
        <td>
          <h4>{T5RfidCC}</h4>
        </td>
        <td>
          <h4>{Hylder}</h4>
        </td>
        <td>
          <h4>{Forl}</h4>
        </td>
        <td>
          <h4>{RFIDcc}</h4>
        </td>
        <td>
          <h4>{halfRFIDcc}</h4>
        </td>
        <td>
          <h4>{halfHylde}</h4>
        </td>
        <td>
          <h4>{halfCC}</h4>
        </td>
        <td>
          <h4>{DSHalfCC}</h4>
        </td>
        <td>
          <h4>{DSHalfHylde}</h4>
        </td>
        <td>
          <h4>{Eupl}</h4>
        </td>
        <td>
          <h4>{HalfPll}</h4>
        </td>
        <td>
          <h4>{quartPll}</h4>
        </td>
        <td>
          <h4>{CC}</h4>
        </td>
        <td>
          <h4>{Sojle}</h4>
        </td>
        <td>
          <h4>
            <input type="checkbox" />
          </h4>
        </td>
        <td className="comment--row">
          {/* <button>Indsæt</button> */}
          <Comment Comment={Kommentar} />
          {/* <Comment Comment={Kommentar} /> */}
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <h4>{Kommentar}</h4>
        </td>
        <td>
          <h4 className="empty">.</h4>
        </td>
      </tr>
    </>
  );
}





export default Emballage;
