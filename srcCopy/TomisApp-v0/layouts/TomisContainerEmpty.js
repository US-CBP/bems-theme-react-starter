import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'BemsMui/Paper';

class TomisContainerEmpty extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, children } = this.props;
    return (
      <Paper zDepth={0}>
        {children}
      </Paper>
    );
  }
}

export default TomisContainerEmpty;
