import "../style/App.css";

function Terms() {
  return (
    <div className="terms--wrapper">
        <input name="header" placeholder="Vilkår" />
        <textarea name="terms" rows="6" placeholder="Vilkår tekst" />
    </div>
  );
};
  
export default Terms;
