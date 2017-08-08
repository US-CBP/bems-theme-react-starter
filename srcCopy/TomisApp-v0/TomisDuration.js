import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisTimeSpinner from 'TomisApp/TomisTimeSpinner';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import TextFieldCheckbox from 'BemsMui/TextField/TextFieldCheckbox';

const floatingLabelStyle = {
    height: '24px',
    top: '24px',
    marginLeft: '12px'
};

const defaultProps = {
    isRequired: true,
    isCloneable: false,
    disabledClone: false
};

const propTypes = {
    isRequired: PropTypes.bool.isRequired,
    isCloneable: PropTypes.bool.isRequired,
    disabledClone: PropTypes.bool.isRequired
};

class TomisDuration extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isRequired, isCloneable, disabledClone } = this.props;
        const { height } = floatingLabelStyle;
        return (
            <div style={{ paddingTop: '8px', width: '150px', textAlign: 'center' }}>
                <label style={{ fontSize: '12px', paddingLeft: isCloneable ? '24px' : 0 }}>
                    Duration{isRequired}
                </label>
                <div style={{ display: 'flex' }}>
                    {isCloneable && <TextFieldCheckbox underlineShow={false} style={{ height: '56px' }} fullWidth={true} isCloneable={isCloneable} disabledClone={disabledClone} />}
                    <TomisTimeSpinner
                        floatingLabelText="HH"
                        floatingLabelStyle={floatingLabelStyle}
                        inputStyle={{ marginTop: 0, marginLeft: '12px' }}
                        underlineStyle={{ bottom: '12px' }}
                        value="00"
                        fullWidth={false}
                        textFieldSimpleStyle={{ width: '40px', height: '60px', flex: 'none' }}
                        isDisplayArrowIcons={false}
                    />
                    <TomisTextFieldReadOnly
                        floatingLabelText="&nbsp;"
                        floatingLabelStyle={floatingLabelStyle}
                        value="+"
                        style={{ height: '24px', paddingLeft: '8px' }}
                        inputStyle={{ width: '20px' }}
                    />
                    <TomisTimeSpinner
                        floatingLabelText="MM"
                        floatingLabelStyle={floatingLabelStyle}
                        inputStyle={{ marginTop: 0, marginLeft: '12px' }}
                        underlineStyle={{ bottom: '12px' }}
                        value="00"
                        fullWidth={false}
                        textFieldSimpleStyle={{ width: '40px', height: '60px', flex: 'none' }}
                        isDisplayArrowIcons={false}
                    />
                </div>
            </div>
        );
    }
}

TomisDuration.defaultProps = defaultProps;
TomisDuration.propTypes = propTypes;
export default TomisDuration;
