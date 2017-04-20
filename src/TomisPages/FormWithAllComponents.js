import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import TableReadOnly from '../Tomis/TableReadOnly';

class FormWithAllComponents extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <TableReadOnly />
            </div>
        );
    }
}

export default muiThemeable()(FormWithAllComponents);
