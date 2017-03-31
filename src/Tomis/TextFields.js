import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from '../TomisMui/TextField';

class TextFields extends Component {
  render() {
    return (
      <div>
        <TextField hintText="Where did you leave from?" floatingLabelText="Departure Location" />
        <br />
        <TextField defaultValue="Buffalo, NY" floatingLabelText="Departure Location" />
        <br />
        <TextField hintText="Where did you leave from?" errorText="This field is required" floatingLabelText="Departure Location" />
        <br />
        <TextField disabled={true} hintText="Where did you leave from?" defaultValue="Buffalo, NY" floatingLabelText="Departure Location" />
        <br />
        <TextField hintText="Departure - no floating label" />
        <br />

      </div>
    );
  }
}

export default muiThemeable()(TextFields);
