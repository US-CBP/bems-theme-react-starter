import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';
import RaisedButton from '../TomisMui/RaisedButton';

class RiskDecisionAcceptPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex-row row-spacer-24">
          <div>
            <RaisedButton label="Proceed to Execution" primary={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecisionAcceptPage);
