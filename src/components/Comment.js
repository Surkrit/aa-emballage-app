import '../style/App.css';

function Comment({comment}) {
    return (
      <textarea className="comment" cols="30" rows="10">{comment}</textarea>
    );
    }

export default Comment;