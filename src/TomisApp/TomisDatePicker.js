import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet, withStyles } from 'material-ui/styles';
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

const checkboxSize = 24;
const checkboxW = 36;
const checkboxMRFactor = 1.15;
const twoIconMRFactor = 1.75;

// export const datePickerStyleSheet = createStyleSheet('DatePickerRender', theme => {
//     console.log('datePickerStyleSheet theme=', theme);
//     return {
//         checkbox: {
//             color: theme.text.primary,
//             width: `${checkboxW}px`,
//             height: `${checkboxW}px`,
//             position: 'absolute',
//             zIndex: 1,
//             left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
//             top: '20px'
//         },
//         checkboxDisabled: {
//             color: theme.text.disabled
//         },
//         dp: {
//             marginLeft: '4px',
//             width: '256px'
//         },
//         dpCloneable: {
//             marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`
//         },
//         dpInput: {
//             position: 'absolute',
//             top: '30px'
//         },
//         formControl: {
//             width: '100%',
//             flex: 1
//         },
//         formHelperText: {
//             display: 'flex',
//             justifyContent: 'space-between'
//         },
//         inkbar: {
//             '&:after': {
//                 backgroundColor: 'red'
//             }
//         },
//         inpBase: {
//             marginLeft: '4px',
//             width: '100%',
//             height: `${30}px`,
//             outline: 'none',
//             border: 'none',
//             fontSize: '14px'
//         },
//         inpCloneable: {
//             marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
//         },
//         inpDisabled: {
//             backgroundColor: 'transparent'
//         },
//         inputLabel: {
//             marginLeft: '5px'
//         },
//         inputLabelCloneable: {
//             marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
//         },
//         selectCalendar: {
//             color: theme.text.primary,
//             position: 'absolute',
//             right: 0,
//             top: `${20}px`,
//             width: '36px',
//             height: '36px'
//         },
//         selectCalendarDisabled: {
//             color: theme.text.disabled
//         }
//     };
// });

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

    // componentDidMount() {
    //     const { theme } = this.props;
    //     console.log('componentDidMount theme.palette.primary=', theme.palette.primary);
    // }

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
        evt.preventDefault();
        console.log('evt.target=', evt.target);
        this.state.isDayPickerOpen = false;
        this.setState(this.state);
    };

    handleClickDayPicker = evt => {
        evt.preventDefault();
        evt.stopPropagation();
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
                checkbox: clsCheckbox,
                checkboxDisabled: clsCheckboxDisabled,
                dp: clsDp,
                dpCloneable: clsDpCloneable,
                dpInput: clsDpInput,
                formControl: clsFormControl,
                formHelperText: clsFormHelperText,
                inkbar: clsInkbar,
                inpBase: clsInpBase,
                inpCloneable: clsInpCloneable,
                inpDisabled: clsInpDisabled,
                inputLabel: clsInputLabel,
                inputLabelCloneable: clsInputLabelCloneable,
                selectCalendar: clsSelectCalendar,
                selectCalendarDisabled: clsSelectCalendarDisabled
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
                    <div className={cx(clsDp, { [clsDp]: isDisplayCloneable })} onMouseDown={handleClickDayPicker}>
                        <DayPicker onDayClick={handleDayClick} />
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
