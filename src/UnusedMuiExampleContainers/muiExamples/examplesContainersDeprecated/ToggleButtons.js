import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '../TomisMui/ToggleButton';
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
        <ToggleButtonGroup name="shipSpeed" defaultSelected="not_light">
            <ToggleButton value="light" label="Btn1 Value 1" />
            <ToggleButton value="not_light" label="Btn2" />
            <ToggleButton value="ludicrous" label="Btn3" />
        </ToggleButtonGroup>
    </div>
);

export default ToggleButtons;
