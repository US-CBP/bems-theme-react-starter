import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusBarRender from 'common/StatusBarRender';

class StatusBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <StatusBarRender {...this.props} />;
  }
}

export default StatusBar;
