import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisInputRender from './TomisInputRender';
import { setStateInputVal } from 'TomisApp/common/helper';

const defaultProps = {
  isCloneable: false
};

const propTypes = {
  isCloneable: PropTypes.bool
};

const initState = () => {
  return {
    val: ''
  };
};

class TomisInput extends Component {
  constructor(props) {
    super(props);
    this.state = initState();
    this.handleChangeVal = this.handleChangeVal.bind(this);
  }

  handleChangeVal(evt) {
    const val = evt.target.value;
    this.setState(setStateInputVal.bind(this, val));
  }

  render() {
    const { handleChangeVal } = this;
    const { val } = this.state;
    return <TomisInputRender val={val} handleChangeVal={handleChangeVal} {...this.props} />;
  }
}

TomisInput.defaultProps = defaultProps;
TomisInput.propTypes = propTypes;
export default TomisInput;
