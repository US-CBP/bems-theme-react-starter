import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const defaultProps = {
    label: 'Local/Zulu'
};

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

class ToggleButtonLocalZuluRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, label, property, handleChange, isCloneable, disabledClone, disabled } = this.props;
        return (
            <ToggleButtonGroup
                property={property}
                label={label}
                isCloneable={isCloneable}
                disabledClone={disabledClone}
                disabled={disabled}
                selectedValue={value}
                handleChange={handleChange}
            >
                <ToggleButton label="Local" value="LOCAL" />
                <ToggleButton label="Zulu" value="ZULU" />
            </ToggleButtonGroup>
        );
    }
}

ToggleButtonLocalZuluRender.defaultProps = defaultProps;
ToggleButtonLocalZuluRender.propTypes = propTypes;
export default ToggleButtonLocalZuluRender;
