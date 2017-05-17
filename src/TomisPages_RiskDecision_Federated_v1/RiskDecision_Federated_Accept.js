import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import RaisedButton from '../TomisMui/RaisedButton';

class RiskDecision_Federated_Accept extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RiskDecisionCore flightStatus="ACCEPT">
          <div className="flex-row row-spacer-24">
            <div>
              <RaisedButton label="Proceed to Execution" primary={true} />
            </div>
          </div>
        </RiskDecisionCore>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecision_Federated_Accept);
