import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'BemsMui/Paper';
import HeaderNavAction from 'BemsMui/HeaderNavAction';

const defaultProps = {
  sidebarFlex: 1,
  mainFlex: 3
};

const propTypes = {
  sidebarFlex: PropTypes.number,
  mainFlex: PropTypes.number
};

class ContainerPaneLeft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, sidebarFlex, mainFlex, children } = this.props;
    const childrenArr = React.Children.toArray(children);
    return (
      <Paper zDepth={0}>
        <HeaderNavAction actionBarPageTitle={title} />
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

ContainerPaneLeft.defaultProps = defaultProps;
ContainerPaneLeft.propTypes = propTypes;
export default ContainerPaneLeft;
