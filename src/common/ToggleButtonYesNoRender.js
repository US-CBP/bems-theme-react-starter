import React, { Component } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

class ToggleButtonYesNoRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, handleChange, property, label, isCloneable, disabledClone, disabled } = this.props;
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
        <ToggleButton label="Yes" value="Y" />
        <ToggleButton label="No" value="N" />
      </ToggleButtonGroup>
    );
  }
}

export default ToggleButtonYesNoRender;
