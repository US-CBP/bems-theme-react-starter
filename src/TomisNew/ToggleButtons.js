import React, { PropTypes } from 'react';
import { ToggleButton, ToggleButtonGroup } from '../TomisMui/ToggleButton';

const defaultProps = {
  options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }, { label: 'Btn4', value: 'V3' }],
  defaultSelected: -1
};

const propTypes = {
  options: PropTypes.array.isRequired,
  labelText: PropTypes.string,
  valueSelected: PropTypes.string.isRequired
};

const ToggleButtons = ({ ...props }) => {
  const { options, labelText = 'Default Label', valueSelected } = props;
  return (
    <div>
      <label className="labeled-item">{labelText}</label>
      <ToggleButtonGroup name="genericName" valueSelected={valueSelected} {...props}>
        {options.map((option, idx) => {
          const { label, value } = option;
          return <ToggleButton key={`TB${idx}`} label={label} value={value} />;
        })}
      </ToggleButtonGroup>
    </div>
  );
};

ToggleButtons.defaultProps = defaultProps;
ToggleButtons.propTypes = propTypes;

export default ToggleButtons;
