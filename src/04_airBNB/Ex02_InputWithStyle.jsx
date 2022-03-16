import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Ex02_InputWithStyle extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //모든 키 입력에서 발생
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    //autoFocus값이 true 일 경우 focus
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  componentDidUpdate() {
    //autoFocus값이 true 일 경우 focus
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, value, name, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && "invalid"}`}
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

Ex02_InputWithStyle.PropTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Ex02_InputWithStyle.defaultProps = {
  type: "text",
  onChange: () => {},
  autoFocus: false,
};

export default Ex02_InputWithStyle;
