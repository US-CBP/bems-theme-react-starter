import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, datePickerStyleSheet, datePickerStyles } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import cx from 'classnames';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const defaultProps = {
    id: `tdp-${new Date().getTime()}`,
    label: 'TDP Field',
    placeholder: 'TDP Placeholder',
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

class TomisDatePicker extends Component {
    state = {
        payload: {
            val: '',
            isCloneChecked: true
        },
        isFocused: false
    };

    dpInput = null;
    isFocused = false;

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        const { payload: { val } } = this.state;
        this.setState({ payload: { isCloneChecked, val } });
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.setState({ payload: { val } });
    };

    // handleInputFocus = evt => {
    //     evt.stopPropagation();
    //     this.setState({ isFocused: true });
    // };

    // handleInputBlur = evt => {
    //     evt.stopPropagation();
    //     this.setState({ isFocused: false });
    // };

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
        const { handleInputChange, handleCloneCheckboxChange, handleClickIcon } = this;
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
                dpInput: clsDpInput,
                selectCalendar: clsSelectCalendar,
                selectCalendarDisabled: clsSelectCalendarDisabled
            },
            isCloneable,
            disabledClone,
            required
        } = this.props;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly: false, placeholder });
        const { dp, dpCloneable } = datePickerStyles;
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
                        maxLength: 10
                    }}
                />
                <DayPickerInput
                    ref={ref => (this.dpInput = ref)}
                    style={isDisplayCloneable ? dpCloneable : dp}
                    disabled={isDisabled}
                    placeholder={displayPlaceholder}
                    className={cx(clsDpInput)}
                />
                <IconButton
                    className={cx(clsSelectCalendar, { [clsSelectCalendarDisabled]: isDisabled || disabledClone })}
                    disabled={isDisabled}
                    aria-label="Toggle select date display"
                    onClick={handleClickIcon}
                >
                    <TomisFontIcon name="event_note" />
                </IconButton>
                <FormHelperText className={clsFormHelperText}>
                    {helperText}
                </FormHelperText>
            </FormControl>
        );
    }
}
TomisDatePicker.defaultProps = defaultProps;
TomisDatePicker.propTypes = propTypes;
export default withStyles(datePickerStyleSheet)(TomisDatePicker);
