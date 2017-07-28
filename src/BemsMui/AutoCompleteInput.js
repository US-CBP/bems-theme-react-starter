import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FontIcon from './FontIcon';

const defaultProps = {
  id: `ACI-${new Date().getTime()}`
};

class AutoCompleteInput extends Component {
  input = null;
  isFocused = false;

  focus = () => {
    this.input.focus();
    this.isFocused = true;
  };

  blur = () => {
    this.input.blur();
    this.isFocused = false;
  };

  //   handleBlur = () => {
  //     this.isFocused = false;
  //   };

  //   handleFocus = () => {
  //     this.isFocused = true;
  //   };

  handleClickArrowDropDown = evt => {
    const { input, isFocused } = this;
    if (isFocused) {
      input.blur();
    } else {
      input.focus();
    }
  };

  render() {
    //this.props originate from MUI <Input /> Component
    //inputProps originate from AutoSuggest Component
    const { handleClickArrowDropDown, handleFocus, handleBlur } = this;
    const { id, inputProps, rowsMax, ...otherProps } = this.props;
    const { classes, home, ref, ...otherInputProps } = inputProps;

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>S</div>
        <input ref={ref => (this.input = ref)} id={id} {...otherProps} {...otherInputProps} />
        <div onClick={handleClickArrowDropDown}>
          <FontIcon name="arrow_drop_down" />
        </div>
      </div>
    );
  }
}

AutoCompleteInput.defaultProps = defaultProps;
export default AutoCompleteInput;
