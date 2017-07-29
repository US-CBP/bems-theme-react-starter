// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import _get from 'lodash/get';
import AutoCompleteRender from './AutoCompleteRender';

const styleSheet = createStyleSheet('AutoComplete', theme => ({
  textField: {
    width: '100%'
  }
}));

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
  options
};

const propTypes = {
  classes: PropTypes.object.isRequired
};

class AutoComplete extends Component {
  state = {
    payload: { name: null, val: null }
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

export default withStyles(styleSheet)(AutoComplete);
