import '../style/App.css';

function Comment({comment}) {
    return (
      <textarea cols="30" rows="10" className="comment">{comment}</textarea>
    );
    }

export default Comment;
