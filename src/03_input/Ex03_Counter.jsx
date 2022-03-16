import React, { Component } from "react";

class Ex03_Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <div>
        Current Count : {this.state.count}
        <p></p>
        <button onClick={this.increaseCount}>Add Count</button>
      </div>
    );
  }
}

export default Ex03_Counter;
