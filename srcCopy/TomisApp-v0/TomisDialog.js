import React, { Component } from 'react';
import TomisDialogMui from 'BemsMui/Dialog';

class TomisDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TomisDialogMui {...this.props} />;
    }
}
export default TomisDialog;
