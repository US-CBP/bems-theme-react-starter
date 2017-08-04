//@flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
// import RaisedButton from '../BemsMui/RaisedButton';
import Button from 'material-ui/Button';

const buttonDefinitions = [{ label: 'Cancel', onClick: () => {}, parms: { type: 'Cancel' } }, { label: 'Submit', onClick: () => {}, parms: { type: 'Ok' } }];

const setStateIsOpen = (isOpen, state, props) => {
  return { isOpen };
};

const defaultProps = {
  buttonDefinitions
};

const propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array
};

class DialogConfirmation extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //     const { initOpen = false } = this.props;
  //     this.setState(setStateIsOpen.bind(this, initOpen));
  // }

  // componentWillReceiveProps(nextProps) {
  //     const { initOpen = false } = nextProps;
  //     this.setState(setStateIsOpen.bind(this, initOpen));
  // }

  state = {
    isOpen: true
  };

  // handleOpen = () => {
  //     this.setState(setStateIsOpen.bind(null, true));
  // };

  handleClose = () => {
    this.setState(setStateIsOpen.bind(null, false));
  };

  handleClickButton(onClickCallback, buttonParms) {
    this.handleClose();
    onClickCallback(buttonParms);
  }

  renderButtonActionsHOLD = () => {
    const { buttonDefinitions } = this.props;
    const actions = buttonDefinitions.map((buttonDefinition, idx) => {
      const { label, onClick, parms } = buttonDefinition;
      let c = '';
      if (idx > 0) {
        c = 'dialog-btn-margin-left';
      }
      return (
        <Button onClick={handleClickButton.bind(this, onClick, parms)} color="primary">
          {label}
        </Button>
      );
    });
    return actions;
  };

  renderButtonActions = () => {
    return (
      <Button onClick={() => {}} color="primary">
        Cancel
      </Button>
    );
  };

  //     handleCancel = () => {
  //     this.props.onRequestClose(this.props.selectedValue);
  //   };

  //   handleOk = () => {
  //     this.props.onRequestClose(this.state.selectedValue);
  //   };

  render() {
    const { renderButtonActions } = this;
    const { isOpen } = this.state;
    const { title, children, buttonDefinitions, ...other } = this.props;
    return (
      <Dialog ignoreBackdropClick={true} ignoreEscapeKeyUp={true} open={isOpen} {...other}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          {renderButtonActions}
        </DialogActions>
      </Dialog>
    );
  }
}

DialogConfirmation.defaultProps = defaultProps;
DialogConfirmation.propTypes = propTypes;
export default DialogConfirmation;
