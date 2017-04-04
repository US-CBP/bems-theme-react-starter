import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RiskDecisionCore from './riskDecisionCommon/RiskDecisionCore';

class RiskDecisionPage extends Component {
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

export default muiThemeable()(RiskDecisionPage);
