import React from 'react';
import TomisTextFieldSingleline from './TomisTextFieldSingleline';

const inputStyle = { marginLeft: 0 };

const TomisTextFieldMultiline = props => {
    return <TomisTextFieldSingleline {...props} placeholder="" multiline={true} />;
};

export default TomisTextFieldMultiline;
