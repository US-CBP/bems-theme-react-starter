import React from 'react';
import TomisTextFieldSingleLine from './TomisTextFieldSingleLine';

const TomisTextFieldMultiLine = props => {
    return <TomisTextFieldSingleLine {...props} placeholder="" multiline={true} />;
};

export default TomisTextFieldMultiLine;
