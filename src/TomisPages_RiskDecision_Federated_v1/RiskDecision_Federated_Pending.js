import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecision_Federated_Pending extends Component {
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

export default muiThemeable()(RiskDecision_Federated_Pending);
