import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightFloatPageRender from './FlightFloatPageRender';

const setStateLocalZuluValue = (property, localZuluValue, state, props) => {
  return { [property]: localZuluValue };
};

const setStateYesNo = (property, yesNoValue, state, props) => {
  return { [property]: yesNoValue };
};

const initState = {
  localZuluValue: '',
  yesNoValue: '',
  isInitAmo: ''
};

class FlightFloatPage extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  displayName = 'FlightFloatPage';

  handleChangeLocalZulu = (property, evt, value) => {
    this.setState(setStateLocalZuluValue.bind(this, property, value));
  };
  handleChangeYesNo = (property, evt, value) => {
    this.setState(setStateYesNo.bind(this, property, value));
  };
  render() {
    const { handleChangeLocalZulu, handleChangeYesNo } = this;
    const { localZuluValue, yesNoValue } = this.state;
    return (
      <FlightFloatPageRender
        isCloneable={true}
        handleChangeLocalZulu={handleChangeLocalZulu}
        handleChangeYesNo={handleChangeYesNo}
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default FlightFloatPage;
