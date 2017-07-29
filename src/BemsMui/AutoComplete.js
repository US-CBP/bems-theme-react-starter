// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import AutoCompleteRender from './AutoCompleteRender';

const options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];

const defaultProps = {
  textFieldProps: {
    id: `ac-${new Date().getTime()}`,
    label: 'AC Field',
    placeholder: 'AC Placeholder',
    helperText: null,
    disabled: false,
    readOnly: false
  },
  options,
  isCloneable: true,
  disabledClone: false
};

const propTypes = {};

class AutoComplete extends Component {
  state = {
    payload: {
      val: 'two',
      name: 'Two'
    }
  };

  handleInputChange = val => {
    console.log('handleInputChange val=', val);
    this.setState({ payload: { name: _get(val, 'label', null), val: _get(val, 'value', null) } });
  };

  render() {
    const { handleInputChange } = this;
    return <AutoCompleteRender handleInputChange={handleInputChange} {...this.state} {...this.props} />;
  }
}

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;

export default AutoComplete;
