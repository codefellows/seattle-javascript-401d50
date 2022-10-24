import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Jacob"
    };
  }

  render() {
    return (
      <h2>
        {this.props.title}: {this.state.value}
      </h2>
    );
  }
}

export default Name;
