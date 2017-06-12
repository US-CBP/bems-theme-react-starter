import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroundRiskDecisionSectionRender from './riskDecisionCommon/GroundRiskDecisionSectionRender';
import { setStateOperationStatus } from './riskDecisionCommon/helper';

const initState = {
  operationStatusVal: 'PENDING'
};

class GroundRiskDecisionSection extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleOperationStatusOnChange = this.handleOperationStatusOnChange.bind(this);
    this.getIsRenderExecuted = this.getIsRenderExecuted.bind(this);
    this.getIsRenderCanceled = this.getIsRenderCanceled.bind(this);
  }

  handleOperationStatusOnChange(evt, val) {
    this.setState(setStateOperationStatus.bind(this, val));
  }

  getIsRenderExecuted() {
    const { operationStatusVal } = this.state;
    return operationStatusVal === 'EXECUTED';
  }

  getIsRenderCanceled() {
    const { operationStatusVal } = this.state;
    return operationStatusVal === 'CANCELED';
  }

  render() {
    const { getIsRenderExecuted, getIsRenderCanceled, handleOperationStatusOnChange } = this;
    const { operationStatusVal } = this.state;
    return (
      <GroundRiskDecisionSectionRender
        isRenderExecuted={getIsRenderExecuted()}
        isRenderCanceled={getIsRenderCanceled()}
        handleOperationStatusOnChange={handleOperationStatusOnChange}
        operationStatusVal={operationStatusVal}
      />
    );
  }
}

export default GroundRiskDecisionSection;
