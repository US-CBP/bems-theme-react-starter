import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldSimple = ({ ...props }) => <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" fullWidth={true} {...props} />;

export default TextFieldSimple;
