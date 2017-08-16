import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonLocalZuluRender from 'common/ToggleButtonLocalZuluRender';

const localZuluToggleOptions = [{ label: 'Local', value: 'LOCAL' }, { label: 'Zulu', value: 'ZULU' }];

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
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
