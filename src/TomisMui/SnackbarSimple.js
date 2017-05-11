import React, { PropTypes, Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

const setStateIsOpen = (open, state, props) => {
  return { open };
};

const defaultProps = {};

const propTypes = {};

class SnackbarSimple extends Component {
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

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message="Operation Saved Successfully"
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
        {...this.props}
      />
    );
  }
}

export default SnackbarSimple;
