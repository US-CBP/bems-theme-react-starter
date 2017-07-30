import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldSimpleRender from './TextFieldSimpleRender';

const defaultProps = {
  inputFieldProps: {
    id: `tfs-${new Date().getTime()}`,
    label: 'TFS Field',
    placeholder: 'TFS Placeholder',
    helperText: null,
    disabled: false,
    readOnly: false
  },
  isCloneable: false,
  disabledClone: false,
  required: true
};

const propTypes = {};

class TextFieldSimple extends Component {
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
    return <TextFieldSimpleRender handleInputChange={handleInputChange} onCloneCheckboxChange={handleCloneCheckboxChange} {...this.state} {...this.props} />;
  }
}
TextFieldSimple.defaultProps = defaultProps;
TextFieldSimple.propTypes = propTypes;
export default TextFieldSimple;
