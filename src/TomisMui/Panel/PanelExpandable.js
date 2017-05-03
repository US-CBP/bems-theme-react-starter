import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import CloseIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import IconButton from 'material-ui/IconButton';

function getStyles() {
  return {
    root: {
      top: 0,
      bottom: 0,
      right: 4,
      margin: 'auto',
      position: 'absolute'
    }
  };
}

class PanelExpandable extends Component {
  static propTypes = {
    closeIcon: PropTypes.node,
    expanded: PropTypes.bool,
    onExpanding: PropTypes.func.isRequired,
    openIcon: PropTypes.node,
    style: PropTypes.object
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  static defaultProps = {
    closeIcon: <CloseIcon />,
    openIcon: <OpenIcon />
  };

  render() {
    const styles = getStyles(this.props, this.context);

    return (
      <IconButton style={Object.assign(styles.root, this.props.style)} onTouchTap={this.props.onExpanding}>
        {this.props.expanded ? this.props.openIcon : this.props.closeIcon}
      </IconButton>
    );
  }
}

export default PanelExpandable;
