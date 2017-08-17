import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import { getDisplayVals, datePickerStyles } from 'app/helpers/tomisMuiStylesheets';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TomisFontIcon from './TomisFontIcon';
import cx from 'classnames';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Backdrop from 'material-ui/internal/Backdrop';
import Popover from 'material-ui/internal/Popover';

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

const initState = props => {
    const { value } = props;
    const payload = {
        value,
        isCloneChecked: true
    };
    return {
        payload,
        isDayPickerOpen: false
    };
};

const defaultProps = {
    id: `tdp-${new Date().getTime()}`,
    label: null,
    placeholder: null,
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
    constructor(props) {
        super(props);
        this.state = initState(props);
    }

    inputRef = null;

    handleCloneCheckboxChange = (evt, isCloneChecked) => {
        this.state.payload.isCloneChecked = isCloneChecked;
        this.setState(this.state);
    };

    handleInputChange = evt => {
        evt.stopPropagation();
        const val = evt.target.value;
        this.state.payload.value = val;
        this.setState(this.state);
    };

    handleDayClick = (day, { selected }, evt) => {
        evt.stopPropagation();
        const val = day.toLocaleDateString();
        this.state.payload.value = val;
        this.state.isDayPickerOpen = false;
        this.setState(this.state, () => {
            this.handleBlur(evt);
        });
    };

    handlePopoverRequestClose = evt => {
        evt.stopPropagation();
        this.state.isDayPickerOpen = false;
        this.setState(this.state);
    };

    handleClickIcon = evt => {
        evt.stopPropagation();
        this.state.isDayPickerOpen = !this.state.isDayPickerOpen;
        this.setState(this.state);
    };

    handleBlur = evt => {
        const { reportToHoc } = this.props;
        if (reportToHoc) {
            reportToHoc(this.state.payload);
        }
    };

    setInputRef = ref => {
        this.inputRef = ref;
    };

    render() {
        const { handleInputChange, handleCloneCheckboxChange, handleClickIcon, handleDayClick, handlePopoverRequestClose, setInputRef, inputRef, handleBlur } = this;
        const { payload: { value, isCloneChecked }, isDayPickerOpen } = this.state;
        const {
            classes: {
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                formControl: clsFormControl,
                formHelperText: clsFormHelperText,
                inputBase: clsInputBase,
                inputCloneable: clsInputCloneable,
                inputDisabled: clsInputDisabled,
                inputLabel: clsInputLabel,
                inputLabelCloneable: clsInputLabelCloneable,
                popoverPadding: clsPopoverPadding,
                selectCalendar: clsSelectCalendar,
                selectCalendarDisabled: clsSelectCalendarDisabled
            },
            disabled,
            disabledClone,
            helperText,
            id,
            isCloneable,
            label,
            placeholder,
            required,
            floatingLabelText,
            hintText,
            error
        } = this.props;
        const usePlaceholder = placeholder || hintText;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({
            disabled,
            isCloneable,
            disabledClone,
            readOnly: false,
            placeholder: usePlaceholder
        });
        return (
            <FormControl className={clsFormControl} margin="dense" error={error}>
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
                    label={label || floatingLabelText}
                    labelClassName={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })}
                    placeholder={displayPlaceholder}
                    value={value}
                    disabled={isDisabled}
                    margin="dense"
                    fullWidth={true}
                    required={required}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    error={error}
                    inputClassName={cx(clsInputBase, {
                        [clsInputCloneable]: isDisplayCloneable,
                        [clsInputDisabled]: isDisabled
                    })}
                    inputProps={{
                        maxLength: 10
                    }}
                    inputRef={setInputRef}
                    InputLabelProps={{ disabled: isDisabled }}
                />
                <Popover
                    anchorEl={inputRef}
                    anchorOrigin={anchorOrigin}
                    className={cx(clsPopoverPadding)}
                    modal={true}
                    onRequestClose={handlePopoverRequestClose}
                    open={isDayPickerOpen}
                    transformOrigin={targetOrigin}
                >
                    <DayPicker onDayClick={handleDayClick} />
                </Popover>
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
export default withStyles(datePickerStyles, { name: 'TomisDatePicker' })(TomisDatePicker);
