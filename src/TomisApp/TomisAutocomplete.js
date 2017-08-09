// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, autoCompleteStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import InputLabel from 'material-ui/Input/InputLabel';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import CloneableInputRender from './CloneableInputRender';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import cx from 'classnames';
import { RIPPLE_TIME_MS } from 'globalJs/constants';
import { bigLov, smallLov } from 'globalJs/testData';

const defaultProps = {
    id: `ac-${new Date().getTime()}`,
    label: 'AC Field',
    placeholder: 'AC Placeholder',
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false,
    options
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

const options = smallLov;

class TomisAutocomplete extends Component {
    state = {
        payload: {
            val: null,
            name: null,
            isCloneChecked: true
        },
        shrink: false,
        isFocusedLov: false
    };

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    handleInputChange = val => {
        // evt.stopPropagation();
        this.state.payload = { name: _get(val, 'description', null), val: _get(val, 'code', null), isCloneChecked: this.state.payload.isCloneChecked };
        this.setState(this.state);
    };

    handleFocusLov = () => {
        this.state.shrink = true;
        this.state.isFocusedLov = true;
        this.setState(this.state);
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleFocusLov } = this;
        const { payload: { val, name, isCloneChecked, shrink, isFocusedLov } } = this.state;
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
                inputLabelShrink: clsInputLabelShrink,
                formHelperText: clsFormHelperText,
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                inpBase: clsInpBase,
                inpMultilineBase: clsInpMultilineBase,
                inpCloneable: clsInpCloneable,
                inpDisabled: clsInpDisabled,
                selectArrow: clsSelectArrow,
                lov: clsLov,
                lovCloneable: clsLovCloneable,
                inpLov: clsInpLov
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
                <InputLabel
                    className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable, [clsInputLabelShrink]: isFocusedLov })}
                    htmlFor={id}
                    required={required}
                    style={{ zIndex: isFocusedLov ? 10 : 0 }}
                >
                    {label}
                </InputLabel>
                <TextField
                    placeholder={displayPlaceholder}
                    disabled={disabled}
                    margin="dense"
                    fullWidth={true}
                    required={required}
                    inputClassName={cx(clsInpBase, {
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsInpDisabled]: isDisabled
                    })}
                />
                <Select
                    id={id}
                    className={cx(clsInpLov, { [clsLovCloneable]: isDisplayCloneable, [clsLov]: !isDisplayCloneable })}
                    options={options}
                    disabled={isDisabled}
                    placeholder={displayPlaceholder}
                    onChange={handleInputChange}
                    onFocus={handleFocusLov}
                    value={val}
                    clearable={false}
                    labelKey="description"
                    valueKey="code"
                    arrowRenderer={arrowRenderer.bind(this, clsSelectArrow, isDisabled)}
                />
                <FormHelperText className={clsFormHelperText}>
                    {helperText}
                </FormHelperText>
            </FormControl>
        );
    }
}

TomisAutocomplete.defaultProps = defaultProps;
TomisAutocomplete.propTypes = propTypes;
export default withStyles(autoCompleteStyleSheet)(TomisAutocomplete);

const arrowRenderer = (clsSelectArrow, isDisabled, { onMouseDown, isOpen }) => {
    return (
        <IconButton className={clsSelectArrow} disabled={isDisabled} aria-label="Toggle select options display">
            <TomisFontIcon name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'} />
        </IconButton>
    );
};

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
    render() {
        const {
            value,
            onChange,
            options,
            readOnly,
            isCloneable,
            disabledClone,
            renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled, selectArrow: clsSelectArrow, lov: clsLov, lovCloneable: clsLovCloneable },
            onDelayCloneCheckboxChange
        } = this.props;
        //isMyCloneChecked must be assigned *after* it is set to a new value
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);

        return (
            <CloneableInputRender>
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxClick.bind(null, onDelayCloneCheckboxChange)}
                        disabled={isDisabled || disabledClone}
                    />}
                <Select
                    className={cx({ [clsLovCloneable]: isDisplayCloneable, [clsLov]: !isDisplayCloneable })}
                    options={options}
                    disabled={isDisabled}
                    placeholder={displayPlaceholder}
                    onChange={onChange}
                    value={value}
                    clearable={false}
                    labelKey="description"
                    valueKey="code"
                    arrowRenderer={arrowRenderer.bind(this, clsSelectArrow, isDisabled, readOnly)}
                />
            </CloneableInputRender>
        );
    }
}
