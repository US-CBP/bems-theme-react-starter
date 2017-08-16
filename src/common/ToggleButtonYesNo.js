import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonYesNoRender from 'common/ToggleButtonYesNoRender';

const defaultProps = {
    label: 'Yes/No'
};

const propTypes = {
    handleChangeYesNo: PropTypes.func.isRequired,
    yesNoValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

class ToggleButtonYesNo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('ToggleButtonYesNo this.props=', this.props);
        // const { yesNoValue, handleChangeYesNo, labelText, isCloneable, disabledClone } = this.props;
        return <ToggleButtonYesNoRender {...this.props} />;
    }
}

ToggleButtonYesNo.defaultProps = defaultProps;
ToggleButtonYesNo.propTypes = propTypes;
export default ToggleButtonYesNo;
