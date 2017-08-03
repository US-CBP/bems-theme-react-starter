import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeSpinnerRender from './TimeSpinnerRender';

const defaultProps = {
  inputFieldProps: {
    id: `ts-${new Date().getTime()}`,
    label: 'TS Field',
    placeholder: 'TS Placeholder',
    helperText: null,
    disabled: false,
    readOnly: false
  },
  isCloneable: true,
  disabledClone: true,
  required: true
};

const propTypes = {};

class TimeSpinner extends Component {
  state = {
    payload: {
      val: null
    },
    isCloneChecked: true
  };

  handleCloneCheckboxClick = () => {
    this.setState({ isCloneChecked: !this.state.isCloneChecked });
  };

  handleInputChange = val => {
    console.log('handleInputChange val=', val);
    // this.setState({ payload: { name: _get(val, 'description', null), val: _get(val, 'code', null) } });
  };

  render() {
    const { handleInputChange, handleCloneCheckboxClick } = this;
    return <TimeSpinnerRender handleInputChange={handleInputChange} onCloneCheckboxChange={handleCloneCheckboxClick} {...this.state} {...this.props} />;
  }
}
TimeSpinner.defaultProps = defaultProps;
TimeSpinner.propTypes = propTypes;
export default TimeSpinner;
