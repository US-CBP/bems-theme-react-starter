import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloningStepBarRender from 'common/CloningStepBarRender';

const msg = ['Review and / or modify the available fields you want to clone', 'Select date(s) you want to clone to', 'Click button to start cloning'];
const required = ['', '', ''];

const defaultProps = {
    stepNbr: 1
};

const propTypes = {
    stepNbr: PropTypes.number.isRequired,
    style: PropTypes.object
};

class CloningStepBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { stepNbr } = this.props;
        return <CloningStepBarRender msg={msg[stepNbr - 1]} required={required[stepNbr - 1]} {...this.props} />;
    }
}

CloningStepBar.defaultProps = defaultProps;
CloningStepBar.propTypes = propTypes;
export default CloningStepBar;
