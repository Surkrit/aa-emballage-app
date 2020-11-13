import "../style/App.css";

function Button({buttonname}) {
  return (
    <input className="button--green" type="submit" name="Submit" value={buttonname} />

  );
};

export default Button;
