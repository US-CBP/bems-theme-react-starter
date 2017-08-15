import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const defaultProps = {
    labelText: 'Yes/No'
};

const propTypes = {
    handleChangeYesNo: PropTypes.func.isRequired,
    yesNoValue: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired
};

class ToggleButtonYesNoRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { yesNoValue, handleChangeYesNo, label, isCloneable, disabledClone, disabled } = this.props;
        return (
            <ToggleButtonGroup
                aria-label="yes-no"
                name="yes-no"
                label={label}
                isCloneable={isCloneable}
                disabledClone={disabledClone}
                disabled={disabled}
                selectedValue={yesNoValue}
                onChange={handleChangeYesNo}
            >
                <ToggleButton label="Yes" value="Y" checked={yesNoValue === 'Y'} />
                <ToggleButton label="No" value="N" checked={yesNoValue === 'N'} />
            </ToggleButtonGroup>
        );
    }
}

ToggleButtonYesNoRender.defaultProps = defaultProps;
ToggleButtonYesNoRender.propTypes = propTypes;
export default ToggleButtonYesNoRender;
