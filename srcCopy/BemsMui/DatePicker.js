import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { getDisplayVals, handleCloneCheckboxClick, datePickerStyleSheet, datePickerStyles, cloneableStyleSheet } from 'app/helpers/tomisMuiStylesheets';
import IconButton from 'material-ui/IconButton';
import FontIcon from './FontIcon';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import CloneableInputRender from './CloneableInputRender';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const defaultProps = {
    inputFieldProps: {
        id: `dp-${new Date().getTime()}`,
        label: 'DP Field',
        placeholder: 'DP Placeholder',
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

class DatePicker extends Component {
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
            classes: { formControl: clsFormControl, input: clsInput, inputLabel: clsInputLabel, inputLabelCloneable: clsInputLabelCloneable, formHelperText: clsFormHelperText },
            inputFieldProps,
            isCloneable,
            disabledClone,
            required
        } = this.props;
        const { id, label, placeholder, disabled, readOnly, helperText } = inputFieldProps;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals({ disabled, isCloneable, disabledClone, readOnly, placeholder });
        return (
            <FormControl className={clsFormControl} margin="dense">
                <InputLabel className={cx({ [clsInputLabelCloneable]: isDisplayCloneable, [clsInputLabel]: !isDisplayCloneable })} htmlFor={id} required={required} shrink={true}>
                    {label}
                </InputLabel>
                <Input
                    className={clsInput}
                    id={id}
                    component={withStyles(datePickerStyleSheet)(_InputRender)}
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
DatePicker.defaultProps = defaultProps;
DatePicker.propTypes = propTypes;
export default withStyles(cloneableStyleSheet)(DatePicker);

/**
 * Material-UI Input requires the use of ref.  Refs are not allowed in stateless functional components.
 * As such, we must, unfortunately, use a class for the Input component.
 */
class _InputRender extends Component {
    dpInput = null;
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
            renderClasses: { checkbox: clsCheckbox, checkboxDisabled: clsCheckboxDisabled, dp: clsDp, dpCloneable: clsDpCloneable },
            classes: { selectCalendar: clsSelectCalendar, selectCalendarDisabled: clsSelectCalendarDisabled },
            onDelayCloneCheckboxChange
        } = this.props;
        const { dp, dpCloneable } = datePickerStyles;
        const { isDisabled, displayPlaceholder, isDisplayCloneable } = getDisplayVals(this.props);

        return (
            <CloneableInputRender>
                {isDisplayCloneable &&
                    <Checkbox
                        className={cx(clsCheckbox, { [clsCheckboxDisabled]: isDisabled || disabledClone })}
                        onChange={handleCloneCheckboxClick.bind(null, onDelayCloneCheckboxChange)}
                        disabled={isDisabled || disabledClone}
                    />}
                <DayPickerInput ref={ref => (this.dpInput = ref)} style={isDisplayCloneable ? dpCloneable : dp} disabled={isDisabled} placeholder={displayPlaceholder} />
                {!readOnly &&
                    <IconButton
                        className={cx(clsSelectCalendar, { [clsSelectCalendarDisabled]: isDisabled || disabledClone })}
                        disabled={isDisabled}
                        aria-label="Toggle select date display"
                        onClick={handleClickIcon}
                    >
                        <FontIcon name="event_note" />
                    </IconButton>}
            </CloneableInputRender>
        );
    }
}
