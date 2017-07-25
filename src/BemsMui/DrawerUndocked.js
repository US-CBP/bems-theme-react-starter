import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const setStateIsOpen = (open, state, props) => {
  return { open };
};

const defaultProps = {
  drawerItems: [<MenuItem>Menu Item</MenuItem>, <MenuItem>Menu Item 2</MenuItem>]
};

const propTypes = {
  drawerItems: PropTypes.array.isRequired
};

class DrawerUndocked extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { initOpen = false } = this.props;
    this.setState(setStateIsOpen.bind(this, initOpen));
  }

  componentWillReceiveProps(nextProps) {
    const { initOpen = false } = nextProps;
    this.setState(setStateIsOpen.bind(this, initOpen));
  }

  state = {
    open: false
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });
  // {drawerItems.map((drawerItem, idx) => {
  //   return drawerItem;
  // })}

  render() {
    const { drawerItems } = this.props;
    return (
      <div>
        <Drawer docked={false} width={300} open={this.state.open} onRequestChange={open => this.setState({ open })}>
          {this.props.children}
        </Drawer>
      </div>
    );
  }
}

DrawerUndocked.defaultProps = defaultProps;
DrawerUndocked.propTypes = propTypes;

export default DrawerUndocked;
