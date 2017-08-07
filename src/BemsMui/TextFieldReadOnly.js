import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldReadOnly = ({ ...props }) => {
  return (
    <TextField fullWidth={true} {...props} underlineShow={false} inputStyle={{ cursor: 'default' }} readOnly={true} InputProps={{ disableUnderline: true }} />
  );
};

export default TextFieldReadOnly;
