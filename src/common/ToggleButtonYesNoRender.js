import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const defaultProps = {
    label: 'Yes/No'
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
        const { yesNoValue, handleChange, property, label, isCloneable, disabledClone, disabled } = this.props;
        return (
            <ToggleButtonGroup
                property={property}
                label={label}
                isCloneable={isCloneable}
                disabledClone={disabledClone}
                disabled={disabled}
                selectedValue={yesNoValue}
                handleChange={handleChange}
            >
                <ToggleButton label="Yes" value="Y" />
                <ToggleButton label="No" value="N" />
            </ToggleButtonGroup>
        );
    }
}

ToggleButtonYesNoRender.defaultProps = defaultProps;
ToggleButtonYesNoRender.propTypes = propTypes;
export default ToggleButtonYesNoRender;
