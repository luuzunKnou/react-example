import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Ex01_PropsComponent extends Component {
  render() {
    return (
      <div className="message-container">
        {this.props.name}
        {this.props.children}
      </div>
    );
  }
}

Ex01_PropsComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

Ex01_PropsComponent.defaultProps = {
  name: "Default Do-It React!",
};

export default Ex01_PropsComponent;
