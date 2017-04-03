import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import { Card, CardActions, CardHeader, CardText } from '../TomisMui/Card';

class RiskDecisionAcceptPage extends Component {
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

export default muiThemeable()(RiskDecisionAcceptPage);
