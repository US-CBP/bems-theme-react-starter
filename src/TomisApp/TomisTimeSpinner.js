import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, textFieldSimpleStyleSheet, timeSpinnerStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import cx from 'classnames';

const defaultProps = {
    id: `ts-${new Date().getTime()}`,
    label: 'TS Field',
    placeholder: 'TS Placeholder',
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TomisTimeSpinner extends Component {
    state = {
        payload: {
            val: '',
            isCloneChecked: true
        }
    };

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        const { payload: { val } } = this.state;
        this.setState({ payload: { isCloneChecked, val } });
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.setState({ payload: { val } });
    };

    handleClickUpArrow = evt => {
        evt.stopPropagation();
        console.log('handleClickUpArrow');
    };

    handleClickDownArrow = evt => {
        evt.stopPropagation();
        console.log('handleClickDownArrow');
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleClickUpArrow, handleClickDownArrow } = this;
        const { payload: { val, isCloneChecked } } = this.state;
        const {
            id,
            label,
            placeholder,
            disabled,
            helperText,
            classes: {
                formControl: clsFormControl,
                inputLabel: clsInputLabel,
                inputLabelCloneable: clsInputLabelCloneable,
                formHelperText: clsFormHelperText,
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                inpBase: clsInpBase,
                inpCloneable: clsInpCloneable,
                inpDisabled: clsInpDisabled,
                inpSpinner: clsInpSpinner,
                arrowsBase: clsArrowsBase,
                arrowsCloneableTrue: clsArrowsCloneableTrue,
                arrowsCloneableFalse: clsArrowsCloneableFalse,
                arrowsDisabled: clsArrowsDisabled,
                arrowUp: clsArrowUp,
                arrowDown: clsArrowDown
            },
            isCloneable,
            disabledClone,
            required
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly: false, placeholder });
        return (
            <FormControl className={clsFormControl} margin="dense">
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxChange}
                        disabled={isDisabled || disabledClone}
                        tabIndex="-1"
                        checked={isCloneChecked || disabledClone}
                    />}
                <IconButton
                    className={cx(clsArrowsBase, clsArrowUp, {
                        [clsArrowsCloneableTrue]: isDisplayCloneable,
                        [clsArrowsCloneableFalse]: !isDisplayCloneable,
                        [clsArrowsDisabled]: isDisabled
                    })}
                    disabled={isDisabled}
                    aria-label="Increase time"
                    onClick={handleClickUpArrow}
                >
                    <TomisFontIcon name="arrow_drop_up" />
                </IconButton>
                <IconButton
                    className={cx(clsArrowsBase, clsArrowDown, {
                        [clsArrowsCloneableTrue]: isDisplayCloneable,
                        [clsArrowsCloneableFalse]: !isDisplayCloneable,
                        [clsArrowsDisabled]: isDisabled
                    })}
                    disabled={isDisabled}
                    aria-label="Decrease Time"
                    onClick={handleClickDownArrow}
                >
                    <TomisFontIcon name="arrow_drop_down" />
                </IconButton>
                <TextField
                    id={id}
                    label={label}
                    labelClassName={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })}
                    placeholder={displayPlaceholder}
                    value={val}
                    disabled={disabled}
                    margin="dense"
                    fullWidth={true}
                    required={required}
                    onChange={handleInputChange}
                    inputClassName={cx(clsInpBase, clsInpSpinner, {
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsInpDisabled]: isDisabled
                    })}
                    inputProps={{
                        maxLength: 4
                    }}
                />
                <FormHelperText className={clsFormHelperText}>
                    {helperText}
                </FormHelperText>
            </FormControl>
        );
    }
}
TomisTimeSpinner.defaultProps = defaultProps;
TomisTimeSpinner.propTypes = propTypes;
export default withStyles(timeSpinnerStyleSheet)(TomisTimeSpinner);

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
    isFocused = false;

    handleClickIcon = evt => {
        evt.stopPropagation();
        const { dpInput: { input }, isFocused } = this;
        if (isFocused) {
            input.blur();
            this.isFocused = false;
        } else {
            input.focus();
            this.isFocused = true;
        }
    };

    render() {
        const { handleClickIcon } = this;
        const {
            value,
            onChange,
            readOnly,
            isCloneable,
            disabledClone,
            renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled },
            classes: {
                inpBase: clsInpBase,
                inpSpinner: clsInpSpinner,
                inpReadOnly: clsInpReadOnly,
                inpCloneable: clsInpCloneable,
                arrowsBase: clsArrowsBase,
                arrowsCloneableTrue: clsArrowsCloneableTrue,
                arrowsCloneableFalse: clsArrowsCloneableFalse,
                arrowsDisabled: clsArrowsDisabled,
                arrowUp: clsArrowUp,
                arrowDown: clsArrowDown
            },
            onDelayCloneCheckboxChange
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);

        return (
            <CloneableInputRender>
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxClick.bind(null, onDelayCloneCheckboxChange)}
                        disabled={isDisabled || disabledClone}
                    />}
                <input
                    className={cx(clsInpBase, {
                        [clsInpSpinner]: !readOnly,
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsCheckboxDisabled]: isDisabled || disabledClone,
                        [clsInpReadOnly]: readOnly
                    })}
                    disabled={isDisabled}
                    placeholder={displayPlaceholder}
                />
                {!readOnly &&
                    <div>
                        <IconButton
                            className={cx(clsArrowsBase, clsArrowUp, {
                                [clsArrowsCloneableTrue]: isDisplayCloneable,
                                [clsArrowsCloneableFalse]: !isDisplayCloneable,
                                [clsArrowsDisabled]: isDisabled
                            })}
                            disabled={isDisabled}
                            aria-label="Toggle select date display"
                            onClick={handleClickIcon}
                        >
                            <TomisFontIcon name="arrow_drop_up" />
                        </IconButton>
                        <IconButton
                            className={cx(clsArrowsBase, clsArrowDown, {
                                [clsArrowsCloneableTrue]: isDisplayCloneable,
                                [clsArrowsCloneableFalse]: !isDisplayCloneable,
                                [clsArrowsDisabled]: isDisabled
                            })}
                            disabled={isDisabled}
                            aria-label="Toggle select date display"
                            onClick={handleClickIcon}
                        >
                            <TomisFontIcon name="arrow_drop_down" />
                        </IconButton>
                    </div>}
            </CloneableInputRender>
        );
    }
}
