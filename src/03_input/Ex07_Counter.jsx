import React, { Component } from "react";

class Ex07_Counter extends Component {
  render() {
    return (
      <div>
        Current Count : {this.props.count}
        <p></p>
        <button onClick={() => this.props.onAdd()}>Add Count</button>
      </div>
    );
  }
}

export default Ex07_Counter;
