import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloningStepBarPositionRender from 'common/CloningStepBarPositionRender';

const defaultProps = {
    stepNbr: 1,
    dimensions: { top: 0, left: 0, width: 600 }
};

const propTypes = {
    stepNbr: PropTypes.number.isRequired,
    dimensions: PropTypes.object.isRequired
};

class CloningStepBarPosition extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { stepNbr, dimensions: { top, left, width } } = this.props;
        return <CloningStepBarPositionRender {...this.props} />;
    }
}

CloningStepBarPosition.defaultProps = defaultProps;
CloningStepBarPosition.propTypes = propTypes;
export default CloningStepBarPosition;
