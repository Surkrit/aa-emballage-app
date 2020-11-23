import React from "react";

import "../style/App.css";

function DropDown() {
  return (
    <div className="dropdown">
      <DropDownButton />
    </div>
  );
}

//Filtrer knappen med funktionalitet
const DropDownButton = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const onClick = () => setShowFilter(true);
  return (
    <div>
      <button className="enhed" onClick={onClick}>
        Filtrer
      </button>
      {showFilter ? <Filter /> : null}
    </div>
  );
};

//Dropdown der vises når filtrerknappen bliver klikket på
const Filter = () => (
  <form className="form-enhed">
    <h3>Enhed</h3>
    <Input name="cc" FullName="Container" />
    <Input name="eupl" FullName="Europalle" />

    <h3>Emballage</h3>
    <Input name="t5rfidcc" FullName="T5 RFID container" />
    <Input name="rfidcc" FullName="RFID container" />
    <Input name="halfcc" FullName="½ container" />
    <Input name="halfrfidcc" FullName="½ RFID container" />
    <Input name="dshalfcc" FullName="DS ½ container" />
    <Input name="hylder" FullName="Hylder" />
    <Input name="halfhylde" FullName="½ hylde" />
    <Input name="dshalfhylde" FullName="DS ½ hylde" />
    <Input name="halfpll" FullName="½ palle" />
    <Input name="quartpll" FullName="¼ palle" />
    <Input name="forl" FullName="Forlænger" />
    <Input name="sojleror" FullName="Søjlerør" />
  </form>
);

function Input({ name, FullName }) {
  return (
    <div className="form-input">
      <input type="checkbox" name={name} />
      <label htmlFor={name}> {FullName}</label>
    </div>
  );
}

export default DropDown;
