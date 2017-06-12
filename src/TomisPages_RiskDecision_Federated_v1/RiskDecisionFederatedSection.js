import React, { Component } from 'react';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecisionFederatedSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isSaved } = this.props;
    return (
      <div>
        <RiskDecisionCore isSaved={isSaved} />
      </div>
    );
  }
}

export default RiskDecisionFederatedSection;
