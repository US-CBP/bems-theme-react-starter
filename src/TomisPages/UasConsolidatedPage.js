import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import { getFloatingLabelStyle } from '../app/helpers/styles';
import HeaderNavAction from '../TomisInternal/HeaderNavAction';

class TextFields extends Component {
    render() {
        return (
            <div>
                <HeaderNavAction />
                <TextField hintText="Where did you leave from?" floatingLabelText="Departure Location" />
                <br />
                <TextField defaultValue="Buffalo, NY" floatingLabelText="Departure Location" />
                <br />
                <TextField hintText="Where did you leave from?" errorText="This field is required" floatingLabelText="Departure Location" />
                <br />
                <TextField disabled={true} hintText="Where did you leave from?" defaultValue="Buffalo, NY" floatingLabelText="Departure Location" />
            </div>
        );
    }
}

export default muiThemeable()(TextFields);
