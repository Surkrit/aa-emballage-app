import '../style/App.css';
import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render() {
    var { title, children } = this.props;
    const { opened } = this.state;

    if (opened) {
      title = "Indsæt";
    } else {
      title = "Indsæt";
    }

    return (
      <div>
        <button className="input-comment" onClick={this.toggleBox}>{title}</button>
        {/* Her i udskrives dropdownen, children er hentet i selve emballage funktionen, som bliver autogenereret i tabellen. */}
        {opened && <div className="comment-div">{children}</div>}
      </div>
    );
  }
}

export default Comment;
