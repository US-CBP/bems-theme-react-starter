import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import classNames from 'classnames';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import createRippleHandler from 'material-ui/internal/createRippleHandler';
import TouchRipple from 'material-ui/internal/TouchRipple';

const cbWidth = 36;
const cbHeight = cbWidth;

export const styles = theme => ({
    root: {
        position: 'relative'
    },
    checkbox: {
        width: `${cbWidth}px`,
        height: `${cbHeight}px`
    },
    checked: {
        color: theme.palette.accent[700]
    },
    default: {
        color: theme.palette.text.secondary
    },
    ripple: {
        width: `${cbWidth + 2}px`,
        height: `${cbHeight + 2}px`,
        position: 'absolute',
        left: '-14px',
        top: 0
    }
});

const defaultProps = {
    label: 'My Checkbox Label'
};

class TomisSelectionControlsCheckbox extends Component {
    state = {
        checked: false
    };

    ripple = null;

    handleChange = () => (event, checked) => {
        this.setState({ checked: checked });
        const { onChange } = this.props;
        if (onChange) {
            onChange(event, checked);
        }
    };

    handleMouseDown = createRippleHandler(this, 'MouseDown', 'start');
    handleMouseUp = createRippleHandler(this, 'MouseUp', 'stop');

    render() {
        const { handleChange, handleMouseDown, handleMouseUp } = this;
        const { classes: { root: clsRoot, ripple: clsRipple, checkbox: clsCheckbox, default: clsDefault, checked: clsChecked }, label, onChange = handleChange } = this.props;
        const { checked } = this.state;
        return (
            <FormGroup className={classNames(clsRoot)} row onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                <FormControlLabel
                    control={
                        <Checkbox
                            className={classNames(clsCheckbox, { [clsChecked]: checked, [clsDefault]: !checked })}
                            disableRipple={true}
                            checked={checked}
                            onChange={handleChange()}
                            value="checked"
                        />
                    }
                    label={label}
                />
                <TouchRipple
                    className={classNames(clsRipple)}
                    innerRef={node => {
                        this.ripple = node;
                    }}
                    center={true}
                />
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

export default withStyles(styles, { name: 'TomisSelectionControlsCheckbox' })(TomisSelectionControlsCheckbox);
