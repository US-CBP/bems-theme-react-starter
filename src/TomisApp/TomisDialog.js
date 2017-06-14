import React, { Component } from 'react';
import TomisDialog from 'TomisMui/Dialog';

class TomisDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Dialog {...this.props} />;
  }
}
export default TomisDialog;
