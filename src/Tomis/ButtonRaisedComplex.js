import React from 'react';
import ExampleContainer from './helper/ExampleContainer';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

const ButtonRaisedComplex = () => (
  <ExampleContainer>
    <RaisedButton label="Label before" labelPosition="before" primary={true} icon={<ActionAndroid />} style={styles.button} />
  </ExampleContainer>
);

export default ButtonRaisedComplex;
