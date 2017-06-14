import React from 'react';
import TextField from '../TomisMui/TextField/TextField';

const TextFieldReadOnly = ({ ...props }) => {
  return (
    <TextField
      value="&nbsp;"
      floatingLabelText="Floating Label Text"
      fullWidth={true}
      {...props}
      underlineShow={false}
      inputStyle={{ cursor: 'default' }}
      readOnly={true}
    />
  );
};

export default TextFieldReadOnly;
