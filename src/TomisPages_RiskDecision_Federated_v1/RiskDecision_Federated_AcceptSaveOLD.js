import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import RaisedButton from '../TomisMui/RaisedButton';

class RiskDecision_Federated_AcceptSave extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RiskDecisionCore flightStatus="ACCEPT">
          <div className="flex-row row-spacer-24">

          </div>
        </RiskDecisionCore>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecision_Federated_AcceptSave);
