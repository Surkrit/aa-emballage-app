import "../style/App.css";
import Headline from '../components/Headline';
import Message from '../components/Message';
import Comment from '../components/Comment';
import NavAdmin from '../components/NavAdmin';
import Button from '../components/Button';
import {
  Link
} from "react-router-dom";

function Admin() {
  return (
    <div>
               <div className="content">
                  <Headline title="Beskeder" />
                  <Comment comment=""/>
                  <div className="flex--end"><Button buttonname="Send" /></div>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
                  <Message messagetitle="Overskrift" messagedate="16/11/2020" message="Nullam et porta erat. Nulla facilisi. Phasellus eleifend congue ligula quis laoreet. Quisque finibus in ligula quis lacinia. Duis non faucibus nunc, non viverra tellus. Suspendisse quam ex, blandit sed massa nec, varius molestie nisi. Aliquam urna quam, pellentesque vitae quam sed, rutrum vestibulum nulla. Sed id luctus lacus. Sed."/>
               </div>
    </div>
  );
}


export default Admin;
