import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'BemsMui/FontIcon';

const ButtonRaisedComplexPrimary = ({ ...props }) =>
  <RaisedButton label="Label after" icon={<FontIcon name="android" />} labelPosition="after" {...props} primary={true} />;

export default ButtonRaisedComplexPrimary;
