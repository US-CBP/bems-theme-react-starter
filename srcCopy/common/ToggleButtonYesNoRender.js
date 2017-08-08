import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisToggle from 'TomisApp/TomisToggle';

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
    const { yesNoValue, handleChangeYesNo, labelText, isCloneable, disabledClone, toggleOptions } = this.props;
    return (
      <TomisToggle
        labelText={labelText}
        isCloneable={isCloneable}
        disabledClone={disabledClone}
        valueSelected={yesNoValue}
        options={toggleOptions}
        onChange={handleChangeYesNo}
      />
    );
  }
}

ToggleButtonYesNoRender.defaultProps = defaultProps;
ToggleButtonYesNoRender.propTypes = propTypes;
export default ToggleButtonYesNoRender;
