import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from '../TomisMui/RaisedButton';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecisionAcceptPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RiskDecisionCore>
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

export default muiThemeable()(RiskDecisionAcceptPage);
