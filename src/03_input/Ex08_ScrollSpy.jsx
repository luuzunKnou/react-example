import React, { Component } from "react";

class Ex08_ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log("enter");
    } else {
      console.log("exit");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkPosition);
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkPosition);
  }

  render() {
    return <div ref={this.setRef}></div>;
  }
}

export default Ex08_ScrollSpy;
