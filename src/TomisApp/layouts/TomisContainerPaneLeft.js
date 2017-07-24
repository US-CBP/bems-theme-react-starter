import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'BemsMui/Paper';
import TomisHeaderNavAction from 'TomisApp/TomisHeaderNavAction';

const defaultProps = {
  sidebarFlex: 1,
  mainFlex: 3
};

const propTypes = {
  sidebarFlex: PropTypes.number,
  mainFlex: PropTypes.number
};

class TomisContainerPaneLeft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, sidebarFlex, mainFlex, children } = this.props;
    const childrenArr = React.Children.toArray(children);
    return (
      <Paper zDepth={0}>
        <TomisHeaderNavAction actionBarPageTitle={title} />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: sidebarFlex }}>
            {childrenArr[0] || false}
          </div>
          <div style={{ flex: mainFlex }}>
            {childrenArr[1] || false}
          </div>
        </div>
      </Paper>
    );
  }
}

TomisContainerPaneLeft.defaultProps = defaultProps;
TomisContainerPaneLeft.propTypes = propTypes;
export default TomisContainerPaneLeft;
