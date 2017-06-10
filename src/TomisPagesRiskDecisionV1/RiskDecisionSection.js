import React, { Component } from 'react';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecisionSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RiskDecisionCore />
      </div>
    );
  }
}

export default RiskDecisionSection;
