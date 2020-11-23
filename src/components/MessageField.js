import '../style/App.css';

function MessageField({message}) {
    return (
      <div className="messagefield--wrapper">
        <input name="Dato" type="date"/>
        <textarea className="messagefield" cols="30" rows="10">{message}</textarea>
      </div>
    );
    }

export default MessageField; 