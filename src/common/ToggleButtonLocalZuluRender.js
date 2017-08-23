import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

class ToggleButtonLocalZuluRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, property, onModify, isCloneable, disabledClone, disabled, payload } = this.props;
    return (
      <ToggleButtonGroup
        property={property}
        label={label}
        isCloneable={isCloneable}
        disabledClone={disabledClone}
        disabled={disabled}
        onModify={onModify}
        payload={payload}
      >
        <ToggleButton label="Local" value="LOCAL" />
        <ToggleButton label="Zulu" value="ZULU" />
      </ToggleButtonGroup>
    );
  }
}

export default ToggleButtonLocalZuluRender;
