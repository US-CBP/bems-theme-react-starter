import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonYesNoRender from 'common/ToggleButtonYesNoRender';

const yesNoToggleOptions = [{ label: 'Yes', value: 'YES' }, { label: 'No', value: 'NO' }];

const defaultProps = {
  labelText: 'Yes/No'
};

const propTypes = {
  handleChangeYesNo: PropTypes.func.isRequired,
  yesNoValue: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
};

class ToggleButtonYesNo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { yesNoValue, handleChangeYesNo, labelText, isCloneable, disabledClone } = this.props;
    return <ToggleButtonYesNoRender toggleOptions={yesNoToggleOptions} {...this.props} />;
  }
}

ToggleButtonYesNo.defaultProps = defaultProps;
ToggleButtonYesNo.propTypes = propTypes;
export default ToggleButtonYesNo;
