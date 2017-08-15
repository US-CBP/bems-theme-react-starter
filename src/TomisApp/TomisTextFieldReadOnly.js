import React from 'react';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';

const TomisTextFieldReadOnly = props => {
  const { value = ' ', ...other } = props;
  return <TomisTextFieldSingleLine value={value} {...other} isReadOnly={true} />;
};

export default TomisTextFieldReadOnly;
