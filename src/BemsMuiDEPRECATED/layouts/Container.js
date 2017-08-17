import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'BemsMui/Paper';
import HeaderNavAction from 'BemsMui/HeaderNavAction';

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, children } = this.props;
    return (
      <Paper zDepth={0}>
        <HeaderNavAction actionBarPageTitle={title} />
        <div>
          {children}
        </div>
      </Paper>
    );
  }
}

export default Container;
