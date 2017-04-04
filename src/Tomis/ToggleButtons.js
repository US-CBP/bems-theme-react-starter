import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '../TomisMui/ToggleButton';
import RaisedButton from '../TomisMui/RaisedButton';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const ToggleButtons = () => (
  <div>
    <ToggleButtonGroup name="shipSpeed" defaultSelected="not_light" style={{ maxWidth: 200, display: 'flex', justifyContent: 'flex-start' }}>
      <ToggleButton
        value="light"
        checkedIcon={<RaisedButton label="Btn1" primary={true} />}
        uncheckedIcon={<RaisedButton label="Btn1" />}
        style={styles.radioButton}
      />
      <ToggleButton
        value="not_light"
        checkedIcon={<RaisedButton label="Btn2" primary={true} />}
        uncheckedIcon={<RaisedButton label="Btn2" />}
        style={styles.radioButton}
      />
      <ToggleButton
        value="ludicrous"
        checkedIcon={<RaisedButton label="Btn3" primary={true} />}
        uncheckedIcon={<RaisedButton label="Btn3" />}
        style={styles.radioButton}
      />
    </ToggleButtonGroup>
    {/*<ToggleButtonGroup name="shipName" defaultSelected="community">
      <ToggleButton value="enterprise" label="Disabled unchecked" disabled={true} style={styles.radioButton} />
      <ToggleButton value="community" label="Disabled checked" disabled={true} style={styles.radioButton} />
    </ToggleButtonGroup>
    <ToggleButtonGroup name="notRight" labelPosition="left" style={styles.block}>
      <ToggleButton value="reverse" label="Label on the left" style={styles.radioButton} />
    </ToggleButtonGroup>*/}
  </div>
);

export default ToggleButtons;
