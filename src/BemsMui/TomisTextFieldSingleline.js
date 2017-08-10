import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, textFieldSimpleStyleSheet, cloneableStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';
import InputLabel from 'material-ui/Input/InputLabel';
import Input from 'material-ui/Input';
import TextField from 'material-ui/TextField';

const defaultProps = {
    id: `tfs-${new Date().getTime()}`,
    label: 'TFS Field',
    placeholder: 'TFS Placeholder',
    helperText: null,
    disabled: false,
    isCloneable: false,
    disabledClone: false,
    required: false,
    multiline: false
};

const propTypes = {
    classes: PropTypes.object.isRequired
};

class TomisTextFieldSingleLine extends Component {
    state = {
        payload: {
            val: '',
            isCloneChecked: true
        },
        currentCharCount: 0,
        isFocused: false
    };

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        this.state.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.state.payload.val = val;
        this.setState(this.state);
    };

    handleInputFocus = evt => {
        evt.stopPropagation();
        this.setState({ isFocused: true });
    };

    handleInputBlur = evt => {
        evt.stopPropagation();
        this.setState({ isFocused: false });
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleInputBlur, handleInputFocus } = this;
        const { payload: { val, isCloneChecked }, currentCharCount, isFocused } = this.state;
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
                inpMultilineBase: clsInpMultilineBase,
                inpCloneable: clsInpCloneable,
                inpDisabled: clsInpDisabled
            },
            isCloneable,
            disabledClone,
            required,
            maxLength,
            multiline = false,
            rows,
            rowsMax,
            readOnly = false
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly, placeholder, multiline });
        return (
            <FormControl margin="dense">
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxChange}
                        disabled={isDisabled || disabledClone}
                        tabIndex="-1"
                        checked={isCloneChecked || disabledClone}
                    />}
                <InputLabel className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })} htmlFor={id} required={required}>
                    {label}
                </InputLabel>
                <Input
                    className={cx({
                        [clsInpBase]: !multiline,
                        [clsInpMultilineBase]: multiline,
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsInpDisabled]: isDisabled
                    })}
                    id={id}
                    disabled={isDisabled}
                    margin="dense"
                    placeholder={displayPlaceholder}
                    fullWidth={true}
                    onChange={() => {}}
                    value={val}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    multiline={multiline}
                    rows={rows}
                    rowsMax={rowsMax}
                    inputProps={{
                        maxLength
                    }}
                />
                {/*<TextField
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
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    multiline={multiline}
                    rows={rows}
                    rowsMax={rowsMax}
                    inputClassName={cx({
                        [clsInpBase]: !multiline,
                        [clsInpMultilineBase]: multiline,
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsInpDisabled]: isDisabled
                    })}
                    inputProps={{
                        maxLength
                    }}
                />*/}
                <FormHelperText className={clsFormHelperText}>
                    <span>
                        {helperText}
                    </span>
                    {isFocused &&
                        !!maxLength &&
                        <span>
                            {`${currentCharCount}/${maxLength}`}
                        </span>}
                </FormHelperText>
            </FormControl>
        );
    }
}
TomisTextFieldSingleLine.defaultProps = defaultProps;
TomisTextFieldSingleLine.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(TomisTextFieldSingleLine);
