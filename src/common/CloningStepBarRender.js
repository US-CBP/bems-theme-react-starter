import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tomisTheme from 'app/themes/tomisLightTheme.js';

const { accent: { '400': accent2Color } } = tomisTheme;

const getRenderStyle = props => {
    const { style } = props;
    return Object.assign(
        {},
        {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: accent2Color,
            // width: '100%',
            height: '36px',
            // position: 'static',
            // left: '20px',
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
