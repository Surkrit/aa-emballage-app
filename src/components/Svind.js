import React, { useState } from 'react';
import Headline from './Headline';
import Button from './Button';
import Comment from "./Comment";
import Pagination from './Pagination';
import '../style/App.css';

const initialSvind = [
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
    sojleror: '4',
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
    sojleror: '10',
    comment: 'Jeg vil have ØL!!'
  },
];

const Svind = () => {
  const [input, setInput] = useState({
    id: "",
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
  });
  const [svind, setSvind] = useState(initialSvind);
 
  const handleChange = event => {
    const value = event.target.value;
    setInput({
        ...input, //uden dette, kan der kun tilføjes et input til listen
        [event.target.name]: value
      });
  };
 
  const handleSubmit = event => {
    if (input) {
      setSvind(svind.concat(input));
    }
 
    setInput('');
 
    event.preventDefault();
    event.target.reset();
  };

 /*  const state = { allSvind: [], currentSvind: [], currentPage: null, totalPages: null}
  const onPageChanged = data => {
    const { allSvind } = state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentSvind = allSvind.slice(offset, offset + pageLimit);

    setSvind({ currentPage, currentSvind, totalPages });
  } */
  
  return (
    <div className="svind">
      <Headline title="Svindopgørelse" />
      <form onSubmit={handleSubmit}>
        <label className="svind-date">Dato <input type="date" name="tomgodsDate" onChange={handleChange}/></label>
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
              <td><input type="number" name="t5RfidCc" value={input.t5RfidCc} onChange={handleChange} /></td>
              <td><input type="number" name="hylder" value={input.hylder} onChange={handleChange} /></td>
              <td><input type="number" name="forl" value={input.forl} onChange={handleChange} /></td>
              <td><input type="number" name="rfidCc" value={input.rfidCc} onChange={handleChange} /></td>
              <td><input type="number" name="halfRfidCc" value={input.halfRfidCc} onChange={handleChange} /></td>
              <td><input type="number" name="halfHylde" value={input.halfHylde} onChange={handleChange} /></td>
              <td><input type="number" name="halfCc" value={input.halfCc} onChange={handleChange} /></td>
              <td><input type="number" name="dsHalfCc" value={input.dsHalfCc} onChange={handleChange} /></td>
              <td><input type="number" name="dsHalfHylde" value={input.dsHalfHylde} onChange={handleChange} /></td>
              <td><input type="number" name="eupl" value={input.eupl} onChange={handleChange} /></td>
              <td><input type="number" name="halfPll" value={input.halfPll} onChange={handleChange} /></td>
              <td><input type="number" name="quartPll" value={input.quartPll} onChange={handleChange} /></td>
              <td><input type="number" name="cc" value={input.cc} onChange={handleChange} /></td>
              <td><input type="number" name="sojleror" value={input.sojleror} onChange={handleChange} /></td>
              <td>{/* <Comment /> */}</td>
            </tr>
          </tbody>
        </table>
        <Button buttonname="Indsend"/>
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
        {svind.map((item, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.tomgodsDate}</td>
            <td>{item.t5RfidCc}</td>
            <td>{item.hylder}</td>
            <td>{item.forl}</td>
            <td>{item.rfidCc}</td>
            <td>{item.halfRfidCc}</td>
            <td>{item.halfHylde}</td>
            <td>{item.halfCc}</td>
            <td>{item.dsHalfCc}</td>
            <td>{item.dsHalfHylde}</td>
            <td>{item.eupl}</td>
            <td>{item.halfPll}</td>
            <td>{item.quartPll}</td>
            <td>{item.cc}</td>
            <td>{item.sojleror}</td>
            <td>{item.comment}</td>
          </tr>
        ))}
        </tbody>
      </table>
      {/* <Pagination totalRecords={100} pageLimit={5} pageNeighbours={1} onPageChanged={onPageChanged} /> */}
    </div>
  );
};

export default Svind;