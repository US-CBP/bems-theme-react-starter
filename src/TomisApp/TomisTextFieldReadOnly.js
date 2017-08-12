import React from 'react';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';

const TomisTextFieldReadOnly = props => {
  const { value = ' ' } = props;
  return <TomisTextFieldSingleLine value={value} isReadOnly={true} />;
};

export default TomisTextFieldReadOnly;
