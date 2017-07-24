import React, { PropTypes, Component } from 'react';
import TomisDialog from 'TomisApp/TomisDialog';
import TomisButtonRaisedSimplePrimary from 'TomisApp/TomisButtonRaisedSimplePrimary';

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

class TomisDialogExample extends Component {
    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getButtonActions = this.getButtonActions.bind(this);
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

    handleOpen() {
        this.setState(setStateIsOpen.bind(this, true));
    }

    handleClose() {
        this.setState(setStateIsOpen.bind(this, false));
    }

    getButtonActions() {
        const { buttonLabels } = this.props;
        const actions = buttonLabels.map((buttonLabel, idx) => {
            let c = '';
            if (idx > 0) {
                c = 'dialog-btn-margin-left';
            }
            return <TomisButtonRaisedSimplePrimary className={c} label={buttonLabel} onTouchTap={this.handleClose} />;
        });
        return actions;
    }

    render() {
        const { getButtonActions } = this;
        const { open } = this.state;
        const { title, initOpen, onRequestClose } = this.props;
        return (
            <TomisDialog title="Dialog With Actions" actions={getButtonActions()} modal={true} open={open} onRequestClose={onRequestClose}>
                {this.props.children}
            </TomisDialog>
        );
    }
}

TomisDialogExample.defaultProps = defaultProps;
TomisDialogExample.propTypes = propTypes;
export default TomisDialogExample;
