import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import TableReadOnly from '../Tomis/TableReadOnly';
import DividerMenu from '../Tomis/DividerMenu';

class FormWithAllComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>Above divider</span>
        <DividerMenu />
        <span>Below divider</span>
        <TableReadOnly />
      </div>
    );
  }
}

export default muiThemeable()(FormWithAllComponents);
