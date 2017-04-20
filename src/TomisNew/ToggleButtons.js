import React, { PropTypes } from 'react';
import { ToggleButton, ToggleButtonGroup } from '../TomisMui/ToggleButton';

const defaultProps = {
  labels: ['Btn 1 Value 1', 'Btn2', 'Btn4'],
  defaultSelected: -1
};

const propTypes = {
  labels: PropTypes.array.isRequired,
  defaultSelected: PropTypes.number.isRequired
};

const ToggleButtons = ({ ...props }) => {
  const { labels, defaultSelected } = props;
  return (
    <div>
      <ToggleButtonGroup name="genericName" defaultSelected={`TV${defaultSelected}`}>
        {labels.map((label, idx) => {
          return <ToggleButton key={`TB${idx}`} value={`TV${idx + 1}`} label={label} />;
        })}
      </ToggleButtonGroup>
    </div>
  );
};

ToggleButtons.defaultProps = defaultProps;
ToggleButtons.propTypes = propTypes;

export default ToggleButtons;
