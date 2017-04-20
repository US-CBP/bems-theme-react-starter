import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class RiskDecisionPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            RISK Decision
            </div>
        );
    }
}

export default muiThemeable()(RiskDecisionPage);
