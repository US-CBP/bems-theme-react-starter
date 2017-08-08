import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonLocalZuluRender from 'common/ToggleButtonLocalZuluRender';

const localZuluToggleOptions = [{ label: 'Local', value: 'LOCAL' }, { label: 'Zulu', value: 'ZULU' }];

const propTypes = {
  handleChangeLocalZulu: PropTypes.func.isRequired,
  localZuluValue: PropTypes.string.isRequired
};

class ToggleButtonLocalZulu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { localZuluValue, handleChangeLocalZulu, isCloneable, disabledClone } = this.props;
    return <ToggleButtonLocalZuluRender toggleOptions={localZuluToggleOptions} {...this.props} />;
  }
}

ToggleButtonLocalZulu.propTypes = propTypes;
export default ToggleButtonLocalZulu;
