import "../style/App.css";

function DropDown() {
  return (
    <div className="dropdown">
      <button className="enhed" onClick={showEnheder}>+ Enhed</button>
      <form className="form-enhed">
        <Input name="t5rfidcc" FullName="T5 RFID CC"/>
        <Input name="hylder" FullName="HYLDER"/>
        <Input name="forl" FullName="FORL."/>
        <Input name="rfidcc" FullName="RFID CC"/>
        <Input name="halfrfidcc" FullName="½ RFID CC"/>
        <Input name="halfhylde" FullName="½ hylde"/>
        <Input name="halfcc" FullName="½ CC"/>
        <Input name="dshalfcc" FullName="DS ½CC"/>
        <Input name="dshalfhylde" FullName="DS ½HYLDE"/>
        <Input name="eupl" FullName="EUPL"/>
        <Input name="halfpll" FullName="½ PLL"/>
        <Input name="quartpll" FullName="¼ PLL"/>
        <Input name="cc" FullName="CC"/>
        <Input name="sojleror" FullName="SØJLERØR"/>
      </form>
    </div>
  );
}

function Input({name, FullName}) {
  return (
    <div className="form-input">
      <input type="checkbox" name={name} />
      <label htmlFor={name}> {FullName}</label>
    </div>
  );
}

function showEnheder(){


  var enhed = document.getElementsByClassName(".enhed");
  var dropDown = document.getElementsByClassName(".form-enhed");

  enhed.addEventListener("click", function(event){
    dropDown.style.display = "block";
  }); 
  // dropDown.style.display = "block";

  console.log('The link was clicked.');
}

export default DropDown;
