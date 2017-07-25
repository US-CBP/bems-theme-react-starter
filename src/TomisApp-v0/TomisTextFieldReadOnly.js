import React from 'react';
import TextField from 'BemsMui/TextField/TextField';
import TextFieldCheckbox from 'BemsMui/TextField/TextFieldCheckbox';

const TextFieldReadOnly = ({ ...props }) => {
  if (!props.isCloneable) {
    return (
      <TextField
        value="&nbsp;"
        floatingLabelText="Floating Label Text"
        fullWidth={true}
        underlineShow={false}
        inputStyle={{ cursor: 'default' }}
        {...props}
        readOnly={true}
      />
    );
  } else {
    return (
      <TextFieldCheckbox
        value="&nbsp;"
        floatingLabelText="Floating Label Text"
        fullWidth={true}
        underlineShow={false}
        inputStyle={{ cursor: 'default' }}
        {...props}
        readOnly={true}
      />
    );
  }
};

export default TextFieldReadOnly;
