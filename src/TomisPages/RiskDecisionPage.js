import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '../TomisMui/TextField';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import RaisedButton from '../TomisMui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from '../TomisMui/Card';
import AutoComplete from '../TomisMui/AutoComplete';

const initState = {
  dataSource1: [],
  dataSource2: [],
  isExpanded: true
};

class RiskDecisionPage extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource1: [value, value + value, value + value + value],
      dataSource2: [value, value + value, value + value + value]
    });
  }

  render() {
    const { dataSource1, dataSource2 } = this.state;
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="Flight Planning" />
        <Card expanded={true}>
          <CardHeader title="Card Title" actAsExpander={true} showExpandableButton={true} style={{ backgroundColor: '#e9e9e9' }} />
          <CardText expandable={true}>
            <div style={{ display: 'flex' }}>
              <div>
                <TextField hintText="Where did you leave from?" floatingLabelText="Departure Location" />
              </div>
              <div>
                <AutoComplete hintText="Type anything 1" dataSource={dataSource1} onUpdateInput={this.handleUpdateInput} floatingLabelText="My LOV 1" />
              </div>
              <div>
                <AutoComplete hintText="Type anything 2" dataSource={dataSource2} onUpdateInput={this.handleUpdateInput} floatingLabelText="My LOV 2" />
              </div>

            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default muiThemeable()(RiskDecisionPage);
