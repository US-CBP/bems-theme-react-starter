import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisToggle from 'TomisApp/TomisToggle';

const propTypes = {
  handleChangeLocalZulu: PropTypes.func.isRequired,
  localZuluValue: PropTypes.string.isRequired
};

class ToggleButtonLocalZuluRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { localZuluValue, handleChangeLocalZulu, isCloneable, disabledClone, toggleOptions } = this.props;
    return (
      <TomisToggle
        labelText="Local/Zulu"
        isCloneable={isCloneable}
        disabledClone={disabledClone}
        valueSelected={localZuluValue}
        options={toggleOptions}
        onChange={handleChangeLocalZulu}
      />
    );
  }
}

ToggleButtonLocalZuluRender.propTypes = propTypes;
export default ToggleButtonLocalZuluRender;
