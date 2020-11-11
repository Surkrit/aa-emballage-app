import '../style/App.css';

function DropDown() {
  return (
    <div className="dropdown">
      <button className="enhed">+ Enhed</button>
        <form className="form-enhed" action="/action_page.php">
          <div className="form-input">
            <input type="checkbox" name="t5rfidcc"/>
            <label for="t5"> T5 RFID CC</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="hylder"/>
            <label for="hylder"> HYLDER</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="forl"/>
            <label for="forl"> FORL.</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="rfidcc"/>
            <label for="rfidcc"> RFID CC</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="halfrfidcc"/>
            <label for="halfrfidcc"> ½ RFID CC</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="halfhylde"/>
            <label for="halfhylde"> ½ hylde</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="halfcc"/>
            <label for="halfcc"> ½ CC</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="dshalfcc"/>
            <label for="dshalfcc"> DS ½CC</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="dshalfhylde"/>
            <label for="dshalfhylde"> DS ½HYLDE</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="eupl"/>
            <label for="eupl"> EUPL</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="halfpll"/>
            <label for="halfpll"> ½ PLL</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="quartpll"/>
            <label for="quartpll"> ¼ PLL</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="cc"/>
            <label for="cc"> CC</label>
          </div>
          <div className="form-input">
            <input type="checkbox" name="sojleror"/>
            <label for="sojleror"> SØJLERØR</label>
          </div>
        </form>
    </div>
  );
}



export default DropDown;
