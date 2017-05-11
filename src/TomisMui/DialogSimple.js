import React, { PropTypes, Component } from 'react';
import Dialog from '../TomisMui/Dialog';
import RaisedButton from '../TomisMui/RaisedButton';

const buttonLabels = ['Cancel', 'Submit'];

const setStateIsOpen = (open, state, props) => {
  return { open };
};

const defaultProps = {
  title: 'Default Title',
  buttonLabels
};

const propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array
};

class DialogSimple extends Component {
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

  handleClose = (buttonLabel, buttonIdx, evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    const { onRequestClose } = this.props;
    if (onRequestClose) {
      onRequestClose(buttonLabel, buttonIdx);
    }
    // this.setState(setStateIsOpen.bind(this, false));
  };

  getButtonActions = () => {
    const { buttonLabels } = this.props;
    const actions = buttonLabels.map((buttonLabel, idx) => {
      let c = '';
      if (idx > 0) {
        c = 'dialog-btn-margin-left';
      }
      return <RaisedButton className={c} label={buttonLabel} primary={true} onTouchTap={this.handleClose.bind(this, buttonLabel, idx)} />;
    });
    return actions;
  };

  render() {
    const { getButtonActions } = this;
    const { open } = this.state;
    const { title, initOpen, onRequestClose } = this.props;
    return (
      <Dialog title={title} actions={getButtonActions()} modal={false} open={open} onRequestClose={onRequestClose} {...this.props}>
        {this.props.children}
      </Dialog>
    );
  }
}

DialogSimple.defaultProps = defaultProps;
DialogSimple.propTypes = propTypes;
export default DialogSimple;
