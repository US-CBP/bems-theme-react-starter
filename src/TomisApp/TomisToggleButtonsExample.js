// @flow

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import { ToggleButtonGroup, ToggleButton } from 'TomisApp/ToggleButton';

export const styles = theme => ({
    button: {
        margin: 0
    },
    input: {
        display: 'none'
    }
});

const defaultProps = {
    options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }, { label: 'Btn4', value: 'V3' }],
    disabled: false,
    defaultSelected: -1
};

const propTypes = {
    options: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    labelText: PropTypes.string
};

class TomisToggleButtonsExample extends Component {
    state = {
        selectedValue: 'female'
    };

    handleChange = evt => {
        console.log('ToggleButtons handleChange evt.target.value=', evt.target.value);
        this.setState({ selectedValue: evt.target.value });
    };

    render() {
        const { handleChange } = this;
        const { options, labelText = 'Default Label', classes, disabled } = this.props;
        const { selectedValue } = this.state;
        return (
            <div>
                <ToggleButtonGroup aria-label="gender" name="gender" disabled={disabled} className={classes.group} selectedValue={selectedValue} onChange={handleChange}>
                    <ToggleButton label="Male" value="male" checked={selectedValue === 'male'} />
                    <ToggleButton label="Female" value="female" checked={selectedValue === 'female'} />
                    <ToggleButton label="Other" value="other" checked={selectedValue === 'other'} />
                </ToggleButtonGroup>
            </div>
        );
    }
}

TomisToggleButtonsExample.defaultProps = defaultProps;
TomisToggleButtonsExample.propTypes = propTypes;

export default withStyles(styles, { name: 'TomisToggleButtonsExample' })(TomisToggleButtonsExample);
