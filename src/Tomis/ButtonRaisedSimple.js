import React from 'react';
import ExampleContainer from './helper/ExampleContainer';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const ButtonRaisedSimple = () => (
  <ExampleContainer>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </ExampleContainer>
);

export default ButtonRaisedSimple;
