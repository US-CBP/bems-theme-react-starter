import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, datePickerStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import cx from 'classnames';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Backdrop from 'material-ui/internal/Backdrop';

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
        isDayPickerOpen: false
    };

    // dpInput = null;
    // isFocused = false;

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.state.payload.val = val;
        this.setState(this.state);
    };

    handleDayClick = (day, { selected }, evt) => {
        evt.stopPropagation();
        const val = day.toLocaleDateString();
        console.log('handleDayClick val, evt=', val, evt);
        this.state.payload.val = val;
        this.state.isDayPickerOpen = false;
        this.setState(this.state);
    };

    handleInputFocus = evt => {
        evt.stopPropagation();
        this.state.isDayPickerOpen = true;
        this.setState(this.state);
    };

    handleInputBlur = evt => {
        // evt.stopPropagation();
        console.log('evt.target=', evt.target);
        // this.state.isDayPickerOpen = false;
        // this.setState(this.state);
    };

    handleClickDayPicker = evt => {
        evt.stopPropagation();
        evt.preventDefault();
        console.log('handleClickDayPicker, evt=', evt);
    };

    handleClickBackdrop = evt => {
        console.log('handleClickBackdrop, evt.target=', evt.target);
        this.state.isDayPickerOpen = false;
        this.setState(this.state);
    };

    handleClickIcon = evt => {
        evt.stopPropagation();
        this.state.isDayPickerOpen = !this.state.isDayPickerOpen;
        this.setState(this.state);
    };

    render() {
        const {
            handleInputChange,
            handleCloneCheckboxChange,
            handleClickIcon,
            handleDayClick,
            handleInputFocus,
            handleInputBlur,
            handleClickDayPicker,
            handleClickBackdrop
        } = this;
        const { payload: { val, isCloneChecked }, isDayPickerOpen } = this.state;
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
                selectCalendarDisabled: clsSelectCalendarDisabled,
                dp: clsDp,
                dpCloneable: clsDpCloneable
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
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    inputClassName={cx(clsInpBase, {
                        [clsInpCloneable]: isDisplayCloneable,
                        [clsInpDisabled]: isDisabled
                    })}
                    inputProps={{
                        maxLength: 10
                    }}
                />
                {isDayPickerOpen &&
                    <div>
                        <DayPicker
                            className={cx(clsDp, {
                                [clsDp]: isDisplayCloneable
                            })}
                            onFocus={handleClickDayPicker}
                            onDayClick={handleDayClick}
                        />
                        <Backdrop onClick={handleClickBackdrop} invisible={false} />
                    </div>}
                {/* <DayPickerInput
          style={{ display: 'block' }}
          ref={ref => (this.dpInput = ref)}
          style={isDisplayCloneable ? dpCloneable : dp}
          disabled={isDisabled}
          placeholder={displayPlaceholder}
          className={cx(clsDpInput)}
        /> */}
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
