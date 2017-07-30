// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import AutoCompleteRender from './AutoCompleteRender';
import { RIPPLE_TIME_MS } from 'globalJs/constants';
import { bigLov, smallLov } from 'globalJs/testData';

const options = smallLov;
// const options = bigLov;

const defaultProps = {
  inputFieldProps: {
    id: `ac-${new Date().getTime()}`,
    label: 'AC Field',
    placeholder: 'AC Placeholder',
    helperText: null,
    disabled: false,
    readOnly: false
  },
  options,
  isCloneable: true,
  disabledClone: false,
  required: true
};

const propTypes = {};

class AutoComplete extends Component {
  state = {
    payload: {
      val: null,
      name: null
    },
    isCloneChecked: true
  };

  handleCloneCheckboxChange = () => {
    this.setState({ isCloneChecked: !this.state.isCloneChecked });
  };

  handleInputChange = val => {
    this.setState({ payload: { name: _get(val, 'description', null), val: _get(val, 'code', null) } });
  };

  render() {
    const { handleInputChange, handleCloneCheckboxChange } = this;
    return <AutoCompleteRender handleInputChange={handleInputChange} onCloneCheckboxChange={handleCloneCheckboxChange} {...this.state} {...this.props} />;
  }
}

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;

export default AutoComplete;
