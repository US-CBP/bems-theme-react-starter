import React, { PropTypes } from 'react';
import { ToggleButtonConfirm, ToggleButtonGroupConfirm } from '../BemsMui/ToggleButtonConfirm';

const defaultProps = {
    options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }, { label: 'Btn4', value: 'V3' }],
    defaultSelected: -1
};

const propTypes = {
    options: PropTypes.array.isRequired,
    labelText: PropTypes.string,
    valueSelected: PropTypes.string.isRequired
};

const ToggleButtonsConfirm = ({ ...props }) => {
    const { options, labelText = 'Default Label', valueSelected } = props;
    return (
        <div>
            <label className="labeled-item">{labelText}</label>
            <ToggleButtonGroupConfirm name="genericName" valueSelected={valueSelected} {...props}>
                {options.map((option, idx) => {
                    const { label, value } = option;
                    return <ToggleButtonConfirm key={`TB${idx}`} label={label} value={value} />;
                })}
            </ToggleButtonGroupConfirm>
        </div>
    );
};

ToggleButtonsConfirm.defaultProps = defaultProps;
ToggleButtonsConfirm.propTypes = propTypes;

export default ToggleButtonsConfirm;
