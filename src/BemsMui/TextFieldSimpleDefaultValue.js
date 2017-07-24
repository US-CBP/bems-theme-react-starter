import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldSimpleDefaultValue = ({ ...props }) => (
  <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" defaultValue="Default Value" {...props} />
);

export default TextFieldSimpleDefaultValue;
