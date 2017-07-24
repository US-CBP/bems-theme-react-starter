import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'BemsMui/Paper';
import TomisHeaderNavAction from 'TomisApp/TomisHeaderNavAction';

class TomisContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, children } = this.props;
    return (
      <Paper zDepth={0}>
        <TomisHeaderNavAction actionBarPageTitle={title} />
        <div>
          {children}
        </div>
      </Paper>
    );
  }
}

export default TomisContainer;
