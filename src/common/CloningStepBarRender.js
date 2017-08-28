import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tomisTheme from 'app/themes/tomisLightTheme.js';
import { STEP_BAR_H } from 'globalJs/constants';

const { accent: { '400': accent2Color } } = tomisTheme;

//Dimensions originates from TomisContainerPaneRight
const getRenderStyle = props => {
    const { style, dimensions: { top, left, width, navBarH } } = props;
    return Object.assign(
        {},
        {
            position: 'fixed',
            top: `${navBarH}px`,
            left: `${left}px`,
            width: `${width}px`,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: accent2Color,
            height: `${STEP_BAR_H}px`,
            zIndex: 5,
            fontSize: '14px',
            minWidth: '180px'
        },
        style
    );
};

const defaultProps = {
    stepNbr: 1,
    required: ''
};

const propTypes = {
    stepNbr: PropTypes.number.isRequired,
    style: PropTypes.object,
    msg: PropTypes.string.isRequired,
    required: PropTypes.string
};

class CloningStepBarRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { stepNbr, style, msg, required } = this.props;
        return (
            <div style={getRenderStyle(this.props)}>
                <span style={{ fontWeight: 'bold', paddingLeft: '8px' }}>Step {stepNbr}:</span>&nbsp;&nbsp;{msg}
                {required}
            </div>
        );
    }
}

CloningStepBarRender.defaultProps = defaultProps;
CloningStepBarRender.propTypes = propTypes;
export default CloningStepBarRender;
