import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    localZuluValue: PropTypes.string.isRequired
};

class ToggleButtonLocalZuluRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { localZuluValue, handleChange, isCloneable, disabledClone, disabled } = this.props;
        return (
            <ToggleButtonGroup
                aria-label="local-zulu"
                name="local-zulu"
                label="Local/Zulu"
                isCloneable={isCloneable}
                disabledClone={disabledClone}
                disabled={disabled}
                selectedValue={localZuluValue}
                handleChange={handleChange}
            >
                <ToggleButton label="Local" value="LOCAL" checked={localZuluValue === 'LOCAL'} />
                <ToggleButton label="Zulu" value="ZULU" checked={localZuluValue === 'ZULU'} />
            </ToggleButtonGroup>
        );
    }
}

ToggleButtonLocalZuluRender.propTypes = propTypes;
export default ToggleButtonLocalZuluRender;
