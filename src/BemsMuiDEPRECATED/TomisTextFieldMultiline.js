import React from 'react';
import TomisTextFieldSingleLine from './TomisTextFieldSingleLine';

const inputStyle = { marginLeft: 0 };

const TomisTextFieldMultiLine = props => {
    return <TomisTextFieldSingleLine {...props} placeholder="" multiline={true} />;
};

export default TomisTextFieldMultiLine;
