import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '../TomisMui/TextField';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';
import RaisedButton from '../TomisMui/RaisedButton';
import AutoComplete from '../TomisMui/AutoComplete';
import { Card, CardActions, CardHeader, CardText } from '../TomisMui/Card';

const initState = {
  dataSource: [],
  isExpanded: true
};

class FormWithAllComponents extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [value, value + value, value + value + value]
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="Flight Planning" />
        <Card expanded={this.state.isExpanded}>
          <CardHeader title="Card Title" actAsExpander={true} showExpandableButton={true} />
          <CardText expandable={true}>
            <div>
              <TextField hintText="Where did you leave from?" floatingLabelText="Departure Location" />
            </div>
            <div>
              <AutoComplete hintText="Type anything" dataSource={dataSource} onUpdateInput={this.handleUpdateInput} floatingLabelText="My LOV 1" />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default muiThemeable()(FormWithAllComponents);
