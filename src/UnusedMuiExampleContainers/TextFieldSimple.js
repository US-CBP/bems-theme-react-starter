import React from 'react';
import ExampleContainer from './helper/ExampleContainer';
import TextField from 'material-ui/TextField';

const TextFieldSimple = () => (
  <ExampleContainer>
    <TextField id="text-field-default" defaultValue="Default Value" /><br />
    <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" /><br />
    <TextField defaultValue="Default Value" floatingLabelText="Floating Label Text" /><br />
    <TextField hintText="Hint Text" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={true} /><br />
    <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" floatingLabelText="Fixed Floating Label Text" multiLine={true} rows={2} rowsMax={4} /><br />
    <TextField hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiLine={true} rows={2} /><br />
    <TextField hintText="Full width" fullWidth={true} />
  </ExampleContainer>
);

export default TextFieldSimple;
