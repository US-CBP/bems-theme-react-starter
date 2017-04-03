import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import { getFloatingLabelStyle } from '../app/helpers/styles';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class RiskDecisionRejectPage extends Component {
  render() {
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="Flight Planning" />
        <Card expanded={true}>
          <CardHeader title="Card Title" actAsExpander={true} showExpandableButton={true} />
          <CardText expandable={true} />
        </Card>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecisionRejectPage);
