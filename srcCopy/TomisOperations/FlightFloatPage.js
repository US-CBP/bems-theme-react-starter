import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightFloatPageRender from './FlightFloatPageRender';

const setStateLocalZuluValue = (localZuluValue, state, props) => {
  return { localZuluValue };
};

const initState = {
  localZuluValue: 'LOCAL'
};

class FlightFloatPage extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleChangeLocalZulu = this.handleChangeLocalZulu.bind(this);
  }

  handleChangeLocalZulu(value) {
    console.log('changed local/zulu');
    this.setState(setStateLocalZuluValue.bind(this, value));
  }
  render() {
    const { handleChangeLocalZulu } = this;
    const { localZuluValue } = this.state;
    //Note, dimensions are passed as prop from Container Pane Component.
    return <FlightFloatPageRender isCloneable={true} handleChangeLocalZulu={handleChangeLocalZulu} localZuluValue={localZuluValue} {...this.props} />;
  }
}

export default FlightFloatPage;
