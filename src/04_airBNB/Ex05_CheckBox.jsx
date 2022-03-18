import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from './Ex03_WithStyles';

class Ex05_CheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this); //DOM에 직접 접근을 위해 선언
    this.handleClick = this.handleClick.bind(this);

    this.isError = true;
  }

  componentDidMount(){
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  handleClick(e){
    const { name, onChange } = this.props;
    onChange(name, e.target.clicked);
  }

  setRef(ref){
    this.ref = ref;
  }

  render() {
    const {
      errorMessage,
      label,
      children,
      styles,
      checked,
    } = this.props;
    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type="checkbox"
            defaultChecked ={checked && 'checked' }
            onClick={this.handleClick}
          />
          {children}
        </div>
        {errorMessage && this.isError && (
          <div>
            <span {...css(styles.errorText)}>{errorMessage}</span>
          </div>
        )}
      </label>
    );
  }
}

Ex05_CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
Ex05_CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(Ex05_CheckBox);