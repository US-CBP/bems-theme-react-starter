import React from 'react';
import TextField from 'BemsMui/TextField/TextField';

const TextFieldSimple = ({ ...props }) => {
  const { maxLength, charCountStyle } = props;
  return (
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
      fullWidth={true}
      {...props}
      charCountMax={maxLength}
      charCountStyle={charCountStyle}
    />
  );
};

export default TextFieldSimple;
