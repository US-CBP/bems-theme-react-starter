import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecision_Consolidated_Pending extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RiskDecisionCore flightStatus="PENDING" />
      </div>
    );
  }
}

export default muiThemeable()(RiskDecision_Consolidated_Pending);
