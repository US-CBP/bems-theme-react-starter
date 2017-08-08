import React from 'react';
import TextField from 'BemsMui/TextField/TextField';
import TextFieldCheckbox from 'BemsMui/TextField/TextFieldCheckbox';

const inputStyle = { marginLeft: 0 };

const TextArea = ({ ...props }) => {
  const { maxLength } = props;
  if (!props.isCloneable) {
    return <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" multiLine={true} fullWidth={true} {...props} maxLength={maxLength} />;
  } else {
    return (
      <TextFieldCheckbox
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
        inputStyle={inputStyle}
        multiLine={true}
        fullWidth={true}
        {...props}
        maxLength={maxLength}
      />
    );
  }
};

export default TextArea;
