import "../style/App.css";

function Message({messagetitle, messagedate, message}) {
  return (
    <div className="message--wrapper">
        <div className="message--wrapper__headline">
            <h3> {messagetitle} </h3>
            <h3> {messagedate} </h3>
        </div>
            <p> {message} </p>
    </div>
  );
};
  
export default Message;
