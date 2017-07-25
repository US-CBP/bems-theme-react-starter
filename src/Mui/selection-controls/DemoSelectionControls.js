import React from 'react';
import Checkboxes from './Checkboxes';
import RadioButtons from './RadioButtons';
import RadioButtonsGroup from './RadioButtonsGroup';
import Switches from './Switches';
import SwitchLabels from './SwitchLabels';

const DemoSelectionControls = () => {
    return (
        <div>
            <br />
            <Checkboxes />
            <br /> <br />
            <RadioButtons />
            <br /> <br />
            <RadioButtonsGroup />
            <br /> <br />
            <Switches />
            <br /> <br />
            <SwitchLabels />
        </div>
    );
};

export default DemoSelectionControls;
