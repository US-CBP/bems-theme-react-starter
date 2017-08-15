import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloningStepBar from 'common/CloningStepBar';

const defaultProps = {
    stepNbr: 1,
    dimensions: { top: 0, left: 0, width: 600 }
};

const propTypes = {
    stepNbr: PropTypes.number.isRequired,
    dimensions: PropTypes.object.isRequired
};

class CloningStepBarPositionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { stepNbr, dimensions: { top, left, width } } = this.props;
        return (
            <div className="cloning-stepbar-container">
                <CloningStepBar stepNbr={stepNbr} style={{ width: `${width}px`, left: `${0}px`, position: 'fixed', top: `${112}px` }} />
            </div>
        );
    }
}

CloningStepBarPositionRender.defaultProps = defaultProps;
CloningStepBarPositionRender.propTypes = propTypes;
export default CloningStepBarPositionRender;
