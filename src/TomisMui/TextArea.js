import React from 'react';
import TextField from '../TomisMui/TextField/TextField';

const TextFieldSimple = ({ ...props }) => {
  let maxLength = 9999999999999999;
  if (props.charCountMax) {
    maxLength = props.charCountMax;
  }
  return <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" multiLine={true} fullWidth={true} {...props} maxLength={maxLength} />;
};

export default TextFieldSimple;
