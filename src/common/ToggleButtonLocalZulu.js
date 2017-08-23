import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonLocalZuluRender from 'common/ToggleButtonLocalZuluRender';

const propTypes = {
  onModify: PropTypes.func.isRequired
};

class ToggleButtonLocalZulu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ToggleButtonLocalZuluRender {...this.props} />;
  }
}

ToggleButtonLocalZulu.propTypes = propTypes;
export default ToggleButtonLocalZulu;
