import React, { Component } from 'react';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecisionFederatedSection extends Component {
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

export default RiskDecisionFederatedSection;
