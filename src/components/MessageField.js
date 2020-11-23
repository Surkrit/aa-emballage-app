import '../style/App.css';

function MessageField({message}) {
    return (
      <textarea className="messagefield" cols="30" rows="10">{message}</textarea>
    );
    }

export default MessageField;