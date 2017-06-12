import React, { Component } from 'react';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecisionSection extends Component {
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

export default RiskDecisionSection;
