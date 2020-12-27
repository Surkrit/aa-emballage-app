import React from "react";

class Filter extends React.Component {
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
      title = "Filter -";
    } else {
      title = "Filter +";
    }

    return (
      <div className="filter--wrapper">
        <button className="dropdown--button" onClick={this.toggleBox}>
          {title}
        </button>
        {/* Her i udskrives dropdownen, children er hentet i selve emballage funktionen, som bliver autogenereret i tabellen. */}
        {opened && <div className="dropdown--wrapper">{children}</div>}
      </div>
    );
  }
}

export default Filter;
