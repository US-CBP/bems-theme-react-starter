import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../BemsMui/Dialog';
import RaisedButton from '../BemsMui/RaisedButton';

const buttonLabels = ['Cancel', 'Submit'];

const setStateIsOpen = (open, state, props) => {
    return { open };
};

const defaultProps = {
    buttonLabels
};

const propTypes = {
    title: PropTypes.string,
    labels: PropTypes.array
};

class DialogModal extends Component {
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

    handleOpen = () => {
        this.setState(setStateIsOpen.bind(this, true));
    };

    handleClose = () => {
        this.setState(setStateIsOpen.bind(this, false));
    };

    getButtonActions = () => {
        const { buttonLabels } = this.props;
        const actions = buttonLabels.map((buttonLabel, idx) => {
            let c = '';
            if (idx > 0) {
                c = 'dialog-btn-margin-left';
            }
            return <RaisedButton className={c} label={buttonLabel} primary={true} onTouchTap={this.handleClose} />;
        });
        return actions;
    };

    render() {
        const { getButtonActions } = this;
        const { open } = this.state;
        const { title, initOpen, onRequestClose } = this.props;
        return (
            <Dialog title="Dialog With Actions" actions={getButtonActions()} modal={true} open={open} onRequestClose={onRequestClose}>
                {this.props.children}
            </Dialog>
        );
    }
}

DialogModal.defaultProps = defaultProps;
DialogModal.propTypes = propTypes;
export default DialogModal;
