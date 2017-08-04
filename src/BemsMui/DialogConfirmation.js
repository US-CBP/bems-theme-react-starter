//@flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

const buttonDefinitions = [{ label: 'Cancel', onClick: () => {}, parms: { type: 'Cancel' } }, { label: 'Submit', onClick: () => {}, parms: { type: 'Ok' } }];

const setStateIsOpen = (isOpen, state, props) => {
    return { isOpen };
};

const defaultProps = {
    buttonDefinitions,
    initIsOpen: false
};

const propTypes = {
    title: PropTypes.string,
    labels: PropTypes.array
};

class DialogConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state.isOpen = props.initIsOpen;
    }

    state = {
        isOpen: false
    };

    handleClose = () => {
        this.setState(setStateIsOpen.bind(null, false));
    };

    handleClickButton = (onClickCallback, buttonParms) => {
        this.handleClose();
        onClickCallback(buttonParms);
    };

    renderButtonActions = () => {
        const { buttonDefinitions } = this.props;
        const actions = buttonDefinitions.map((buttonDefinition, idx) => {
            const { label, onClick, parms } = buttonDefinition;
            return (
                <Button key={`BTN-${idx}-${label}`} onClick={this.handleClickButton.bind(this, onClick, parms)} color="primary">
                    {label}
                </Button>
            );
        });
        return actions;
    };

    render() {
        const { renderButtonActions } = this;
        const { isOpen } = this.state;
        const { title, children } = this.props;
        return (
            <Dialog ignoreBackdropClick={true} ignoreEscapeKeyUp={true} open={isOpen}>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    {renderButtonActions()}
                </DialogActions>
            </Dialog>
        );
    }
}

DialogConfirmation.defaultProps = defaultProps;
DialogConfirmation.propTypes = propTypes;
export default DialogConfirmation;
