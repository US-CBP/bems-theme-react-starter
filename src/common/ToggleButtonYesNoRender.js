import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const defaultProps = {
    labelText: 'Yes/No'
};

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    yesNoValue: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired
};

class ToggleButtonYesNoRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('ToggleButtonYesNoRender this.props=', this.props);
        const { yesNoValue, handleChange, label, isCloneable, disabledClone, disabled } = this.props;
        return (
            <ToggleButtonGroup
                aria-label="yes-no"
                name="yes-no"
                label={label}
                isCloneable={isCloneable}
                disabledClone={disabledClone}
                disabled={disabled}
                selectedValue={yesNoValue}
                onChange={handleChange}
            >
                <ToggleButton label="Yes" value="Y" checked={true} />
                <ToggleButton label="No" value="N" checked={yesNoValue === 'N'} />
            </ToggleButtonGroup>
        );
    }
}

ToggleButtonYesNoRender.defaultProps = defaultProps;
ToggleButtonYesNoRender.propTypes = propTypes;
export default ToggleButtonYesNoRender;
