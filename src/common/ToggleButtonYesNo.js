import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

const ToggleButtonYesNo = props =>
  <ToggleButtonGroup {...props}>
    <ToggleButton label="Yes" value="Y" />
    <ToggleButton label="No" value="N" />
  </ToggleButtonGroup>;
export default ToggleButtonYesNo;
