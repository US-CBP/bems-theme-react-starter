import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, handleCloneCheckboxClick, timeSpinnerStyleSheet, cloneableStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';

const defaultProps = {
    inputFieldProps: {
        id: `ts-${new Date().getTime()}`,
        label: 'TS Field',
        placeholder: 'TS Placeholder',
        helperText: null,
        disabled: false,
        readOnly: false
    },
    isCloneable: true,
    disabledClone: false,
    required: true
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TomisTimeSpinner extends Component {
    state = {
        payload: {
            val: null
        }
    };

    handleCloneCheckboxChange = (evt, value) => {
        console.log('handleCloneCheckboxChange called, this.state, evt, value=', this.state, evt, value);
        // this.setState({ isCloneChecked: !this.state.isCloneChecked });
    };

    handleInputChange = val => {
        console.log('handleInputChange val=', val);
        // this.setState({ payload: { name: _get(val, 'description', null), val: _get(val, 'code', null) } });
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange } = this;
        const { payload: { val } } = this.state;
        const {
            classes: renderClasses,
            classes: { formControl: clsFormControl, input: clsInput, inputLabel: clsInputLabel, inputLabel2Cloneable: clsInputLabel2Cloneable, formHelperText: clsFormHelperText },
            inputFieldProps,
            isCloneable,
            disabledClone,
            required
        } = this.props;
        const { id, label, placeholder, disabled, readOnly, helperText } = inputFieldProps;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly, placeholder });
        return (
            <FormControl className={clsFormControl} margin="dense">
                <InputLabel className={cx({ [clsInputLabel2Cloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })} htmlFor={id} required={required} shrink={true}>
                    {label}
                </InputLabel>
                <Input
                    className={clsInput}
                    id={id}
                    component={withStyles(timeSpinnerStyleSheet)(_InputRender)}
                    onChange={handleInputChange}
                    disableUnderline={readOnly}
                    disabled={disabled}
                    value={val}
                    placeholder={placeholder}
                    inputProps={{
                        readOnly,
                        isCloneable,
                        disabledClone,
                        renderClasses,
                        onDelayCloneCheckboxChange: handleCloneCheckboxChange
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
export default withStyles(cloneableStyleSheet)(TomisTimeSpinner);

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
