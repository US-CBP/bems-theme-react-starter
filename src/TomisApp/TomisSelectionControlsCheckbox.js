import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styleSheet = createStyleSheet({});

const defaultProps = {
    label: 'My Checkbox Label'
};

class TomisSelectionControlsCheckbox extends Component {
    state = {
        checked: false
    };

    handleChange = () => (event, checked) => {
        this.setState({ checked: checked });
        const { onChange } = this.props;
        onChange(event, checked);
    };

    render() {
        const { handleChange } = this;
        const { classes, label, onChange = handleChange } = this.props;
        const { checked } = this.state;

        return (
            <FormGroup row>
                <FormControlLabel control={<Checkbox checked={checked} onChange={onChange()} value="checked" />} label={label} />
            </FormGroup>
        );
    }
}

TomisSelectionControlsCheckbox.defaultProps = defaultProps;
TomisSelectionControlsCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

export default withStyles(styleSheet)(TomisSelectionControlsCheckbox);
