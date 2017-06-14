import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const ButtonRaisedComplexPrimary = ({ ...props }) => (
  <RaisedButton label="Label after" icon={<ActionAndroid />} labelPosition="after" {...props} primary={true} />
);

export default ButtonRaisedComplexPrimary;
