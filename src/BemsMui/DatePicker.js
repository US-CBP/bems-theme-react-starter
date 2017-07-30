import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePickerRender from './DatePickerRender';

const defaultProps = {
  inputFieldProps: {
    id: `dp-${new Date().getTime()}`,
    label: 'DP Field',
    placeholder: 'DP Placeholder',
    helperText: null,
    disabled: true,
    readOnly: false
  },
  isCloneable: true,
  disabledClone: false,
  required: true
};

const propTypes = {};

class DatePicker extends Component {
  state = {
    payload: {
      val: null
    },
    isCloneChecked: true
  };

  handleCloneCheckboxChange = () => {
    this.setState({ isCloneChecked: !this.state.isCloneChecked });
  };

  handleInputChange = val => {
    console.log('handleInputChange val=', val);
    // this.setState({ payload: { name: _get(val, 'description', null), val: _get(val, 'code', null) } });
  };

  render() {
    const { handleInputChange, handleCloneCheckboxChange } = this;
    return <DatePickerRender handleInputChange={handleInputChange} onCloneCheckboxChange={handleCloneCheckboxChange} {...this.state} {...this.props} />;
  }
}
DatePicker.defaultProps = defaultProps;
DatePicker.propTypes = propTypes;
export default DatePicker;
