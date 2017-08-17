import React from 'react';
import TomisTextField from 'TomisApp/TomisTextField';

const TomisTextFieldReadOnly = props => {
    const { value = ' ', ...other } = props;
    return <TomisTextField value={value} {...other} isReadOnly={true} />;
};

export default TomisTextFieldReadOnly;
