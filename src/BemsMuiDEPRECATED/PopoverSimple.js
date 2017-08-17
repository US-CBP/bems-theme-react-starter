import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'BemsMui/layouts/Container';
import RaisedButton from 'material-ui/RaisedButton';
import RadioButton from 'material-ui/RadioButton';
import Popover from 'material-ui/Popover/Popover';
import ButtonRaisedSimplePrimary from './ButtonRaisedSimplePrimary';
import { Menu, MenuItem } from 'material-ui/Menu';

const styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400
  },
  block: {
    display: 'flex'
  },
  block2: {
    margin: 10
  },
  pre: {
    overflow: 'hidden' // Fix a scrolling issue on iOS.
  }
};

const setStateIsOpen = (open, state, props) => {
  return { open };
};

const defaultProps = {};

const propTypes = {};

class PopoverSimple extends React.Component {
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
    open: false,
    anchorEl: null,
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'bottom'
    },
    targetOrigin: {
      horizontal: 'left',
      vertical: 'top'
    }
  };

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  setAnchor = (positionElement, position) => {
    const { anchorOrigin } = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin
    });
  };

  setTarget = (positionElement, position) => {
    const { targetOrigin } = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin
    });
  };

  render() {
    const { handleRequestClose, handleTouchTap } = this;
    const { open, anchorOrigin, targetOrigin, anchorEl } = this.state;
    const { label = 'Primary' } = this.props;
    return (
      <div>
        <ButtonRaisedSimplePrimary label={label} onTouchTap={handleTouchTap} />
        <Popover open={open} anchorEl={anchorEl} anchorOrigin={anchorOrigin} targetOrigin={targetOrigin} onRequestClose={handleRequestClose}>
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default PopoverSimple;
