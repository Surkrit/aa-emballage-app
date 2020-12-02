import '../style/App.css';

function MessageField({message}) {
    return (
      <form className="messagefield--wrapper">
        <input name="Dato" type="date"/>
        <input name="headline" type="text" placeholder="Overskrift" />
        <textarea className="messagefield" placeholder="Besked" cols="30" rows="10">{message}</textarea>
      </form>
    );
    }

export default MessageField; 