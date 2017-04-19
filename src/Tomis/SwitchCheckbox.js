import React from 'react';
import ExampleContainer from './helper/ExampleContainer';
import Checkbox from '../TomisMui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const SwitchCheckbox = () => (
  <ExampleContainer>
    <Checkbox label="Simple" style={styles.checkbox} />
    <Checkbox checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} label="Custom icon" style={styles.checkbox} />
    <Checkbox checkedIcon={<Visibility />} uncheckedIcon={<VisibilityOff />} label="Custom icon of different shapes" style={styles.checkbox} />
    <Checkbox label="Disabled unchecked" disabled={true} style={styles.checkbox} />
    <Checkbox label="Disabled checked" checked={true} disabled={true} style={styles.checkbox} />
    <Checkbox label="Label on the left" labelPosition="left" style={styles.checkbox} />
  </ExampleContainer>
);

export default SwitchCheckbox;
