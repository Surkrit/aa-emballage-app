import '../style/App.css';
import React from 'react';

function Comment({comment}) {
    return (
      <Search kommentar={comment}/>
    );
    }

    const Search = ({comment}) => {
      const [showResults, setShowResults] = React.useState(false)
      const onClick = () => setShowResults(true)
      const Kommentar = "hdaljakl";
      return (
            <div class="comment--row">
              <Results Kommentar={Kommentar} />
          <input type="submit" value="Search" onClick={onClick} />
          { showResults ? <Results Kommentar={Kommentar}/> : null }
        </div>
      )
    }

    const Results = ({Kommentar}) => (
    <textarea className="comment" cols="30" rows="10">{Kommentar}</textarea>
    )


    

export default Comment;