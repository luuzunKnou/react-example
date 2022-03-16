import React, { Component } from "react";
import Ex07_Counter from "./Ex07_Counter";

class Ex07_CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return <Ex07_Counter count={this.state.count} onAdd={this.increaseCount} />;
  }
}

export default Ex07_CounterApp;
