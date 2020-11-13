import "../style/App.css";
import Headline from './Headline';

function Emballage() {
  return (
    <>
      <Headline title="Emballageoversigt"/>
      <div>
        <p>Fra dato:</p> <input type="date" />
      </div>
      <div>
        <p>Til dato:</p> <input type="date" />
      </div>
    </>
  );
}



export default Emballage;
