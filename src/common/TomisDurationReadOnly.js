import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';

const floatingLabelStyle = {
    height: '24px',
    top: '24px'
};

const defaultProps = {
    isRequired: false
};

const propTypes = {
    isRequired: PropTypes.bool.isRequired
};

class TomisDurationReadOnly extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { height } = floatingLabelStyle;
        const { isRequired } = this.props;
        return (
            <div style={{ paddingTop: '8px' }}>
                <label>
                    Duration{isRequired && '*'}
                </label>
                <div className="flex-row">
                    <TomisTextFieldReadOnly floatingLabelText="HH" floatingLabelStyle={floatingLabelStyle} value="00" style={{ width: '30px', height: height }} />
                    <TomisTextFieldReadOnly floatingLabelText="&nbsp;" floatingLabelStyle={floatingLabelStyle} value="+" style={{ width: '20px', height: height }} />
                    <TomisTextFieldReadOnly floatingLabelText="MM" floatingLabelStyle={floatingLabelStyle} value="00" style={{ width: '30px', height: height }} />
                </div>
            </div>
        );
    }
}

TomisDurationReadOnly.defaultProps = defaultProps;
TomisDurationReadOnly.propTypes = propTypes;
export default TomisDurationReadOnly;
