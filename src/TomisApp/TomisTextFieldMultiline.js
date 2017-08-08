import React from 'react';
import TomisTextFieldSingleline from './TomisTextFieldSingleline';

const TomisTextFieldMultiline = props => {
    return <TomisTextFieldSingleline {...props} placeholder="" multiline={true} />;
};

export default TomisTextFieldMultiline;
