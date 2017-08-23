import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import _get from 'lodash/get';
import { RIPPLE_TIME_MS } from 'globalJs/constants';

const checkboxSize = 24;
const checkboxW = 36;
const checkboxMRFactor = 1.15;
const toggleButtonsMRFactor = 1.25;
const twoIconMRFactor = 1.75;

export const getDisplayVals = ({ disabled, isCloneable, disabledClone, readOnly, placeholder }) => {
  const isDisabled = disabled ? true : false;
  const displayPlaceholder = disabled ? '' : placeholder;
  const isDisplayCloneable = isCloneable && !readOnly;
  return { isDisabled, displayPlaceholder, isDisplayCloneable };
};

// Give ripple time to finish before updating HOC
// TODO: remove this once we remove BemsMui
const cloneCheckboxChange$ = Observable.timer(RIPPLE_TIME_MS).take(1).share();
export const handleCloneCheckboxClick = (onCloneCheckboxChange, evt, val) => {
  evt.stopPropagation();
  cloneCheckboxChange$.subscribe({
    next: () => {
      onCloneCheckboxChange(evt, val);
    },
    err: () => {},
    complete: () => {}
  });
};

//Keep class names in alphabetical order to maintain our sanity
const getAutoCompleteStyles = theme => {
  return {
    checkbox: {
      color: theme.palette.text.primary,
      width: `${checkboxW}px`,
      height: `${checkboxW}px`,
      position: 'absolute',
      zIndex: 1,
      left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
      top: '10px'
    },
    checkboxDisabled: {
      color: theme.palette.text.disabled
    },
    formControl: {
      width: '100%',
      flex: 1
    },
    input: {
      color: 'transparent',
      paddingLeft: 0,
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputCloneable: {
      paddingLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`,
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputDisabled: {
      backgroundColor: 'transparent',
      color: theme.palette.text.disabled
    },
    inputLabel: {
      marginLeft: 0,
      zIndex: 0
    },
    inputLabelCloneable: {
      marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`,
      zIndex: 0
    },
    inputLov: {
      position: 'absolute',
      top: '16px',
      backgroundColor: 'transparent'
    },
    lov: {
      marginLeft: 0,
      width: '100%'
    },
    lovCloneable: {
      marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
      width: '100%'
    },
    selectArrow: {
      color: theme.palette.text.primary,
      position: 'absolute',
      right: 0,
      top: `${0}px`,
      width: '30px',
      height: '30px'
    },
    underlineCloneable: {
      '&:before': {
        left: `${Number(-1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
      }
    }
  };
};
export const autoCompleteStyles = theme => {
  return getAutoCompleteStyles(theme);
};

//Keep class names in alphabetical order to maintain our sanity
//  NOTE, however, material-ui applies the class names in the order specified by the keys listed in styles.
//  For example, inputBaseMultiLine is always placed before inputCloneable in the React component.  If you
//  need inputBaseMultiLine to occur *after* inputCloneable, you need to include inputBaseMultiLine after
//  inputCloneable here.
const getCloneableStyles = theme => {
  return {
    checkbox: {
      color: theme.palette.text.primary,
      width: `${checkboxW}px`,
      height: `${checkboxW}px`,
      position: 'absolute',
      zIndex: 1,
      left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
      bottom: '22px'
    },
    checkboxDisabled: {
      color: theme.palette.text.disabled
    },
    formControl: {
      width: '100%',
      flex: 1
    },
    formHelperText: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    inputBase: {
      marginLeft: 0,
      width: '100%',
      height: `${30}px`,
      outline: 'none',
      border: 'none',
      fontSize: '14px',
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputBaseMultiLine: {
      marginLeft: 0,
      width: '100%',
      outline: 'none',
      border: 'none',
      backgroundColor: theme.palette.common.white,
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputCloneable: {
      marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`,
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputDisabled: {
      backgroundColor: 'transparent',
      color: theme.palette.text.disabled
    },
    inputLabel: {
      marginLeft: 0
    },
    inputLabelCloneable: {
      marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`
    },
    lov: {
      marginLeft: 0,
      width: '100%'
    },
    lovCloneable: {
      marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
      width: '100%'
    },
    readOnly: {
      pointerEvents: 'none'
    }
  };
};
export const cloneableStyles = theme => {
  return getCloneableStyles(theme);
};

//Keep class names in alphabetical order to maintain our sanity
const getDatePickerStyles = theme => {
  return {
    checkbox: {
      color: theme.palette.text.primary,
      width: `${checkboxW}px`,
      height: `${checkboxW}px`,
      position: 'absolute',
      zIndex: 1,
      left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
      top: '20px'
    },
    checkboxDisabled: {
      color: theme.palette.text.disabled
    },
    formControl: {
      width: '100%',
      flex: 1
    },
    formHelperText: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    inputBase: {
      marginLeft: 0,
      width: '100%',
      height: `${30}px`,
      outline: 'none',
      border: 'none',
      fontSize: '14px',
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputCloneable: {
      marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`,
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputDisabled: {
      backgroundColor: 'transparent',
      color: theme.palette.text.disabled
    },
    inputLabel: {
      marginLeft: 0
    },
    inputLabelCloneable: {
      marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
    },
    popoverPadding: {
      padding: '16px'
    },
    selectCalendar: {
      color: theme.palette.text.primary,
      position: 'absolute',
      right: 0,
      top: `${20}px`,
      width: '36px',
      height: '36px'
    },
    selectCalendarDisabled: {
      color: theme.palette.text.disabled
    }
  };
};
export const datePickerStyles = theme => {
  return getDatePickerStyles(theme);
};

//Keep class names in alphabetical order to maintain our sanity
const getTimeSpinnerStyles = theme => {
  return {
    arrowsCloneableTrue: {
      left: `24px`
    },
    arrowsCloneableFalse: {
      left: 0
    },
    arrowsBase: {
      color: theme.palette.text.primary,
      position: 'absolute',
      width: '24px',
      height: '24px',
      zIndex: 1
    },
    arrowUp: {
      top: `${22}px`
    },
    arrowDown: {
      top: `${36}px`
    },
    arrowsDisabled: {
      color: theme.palette.text.disabled
    },
    checkbox: {
      color: theme.palette.text.primary,
      width: `${checkboxW}px`,
      height: `${checkboxW}px`,
      position: 'absolute',
      left: `${Number(-1 * (checkboxW - checkboxSize) * 0.5).toFixed(0)}px`,
      top: '24px',
      zIndex: 1
    },
    checkboxDisabled: {
      color: theme.palette.text.disabled
    },
    formControl: {
      width: '100%',
      flex: 1
    },
    inputBase: {
      marginLeft: 0,
      width: '100%',
      height: `${30}px`,
      outline: 'none',
      border: 'none',
      fontSize: '14px',
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputCloneable: {
      marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor).toFixed(0)}px`,
      '&::-webkit-input-placeholder': theme.palette.input.placeholder,
      '&::-moz-placeholder': theme.palette.input.placeholder, // Firefox 19+
      '&:-ms-input-placeholder': theme.palette.input.placeholder, // IE 11
      '&::-ms-input-placeholder': theme.palette.input.placeholder // Edge
    },
    inputDisabled: {
      backgroundColor: 'transparent',
      color: theme.palette.text.disabled
    },
    inputLabel: {
      marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
    },
    inputLabelCloneable: {
      marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
    },
    inputSpinner: {
      marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
    },
    inputSpinnerCloneable: {
      marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor).toFixed(0)}px`
    }
  };
};
export const timeSpinnerStyles = theme => {
  return getTimeSpinnerStyles(theme);
};

//Keep class names in alphabetical order to maintain our sanity
const getToggleButtonGroupStyles = theme => {
  return {
    buttons: {
      margin: 0
    },
    buttonsCloneable: {
      margin: `0px 0px 0px ${Number(checkboxSize * toggleButtonsMRFactor).toFixed(0)}px`
    },
    checkbox: {
      color: theme.palette.text.primary,
      width: `${checkboxW}px`,
      height: `${checkboxW}px`,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1
    },
    checkboxDisabled: {
      color: theme.palette.text.disabled
    },
    inputLabel: {
      fontSize: '12px',
      marginTop: '8px',
      marginBottom: '6px',
      marginLeft: 0
    },
    inputLabelCloneable: {
      fontSize: '12px',
      marginTop: '8px',
      marginBottom: '6px',
      marginLeft: `${Number(checkboxSize * toggleButtonsMRFactor).toFixed(0)}px`
    },
    root: {
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1 auto',
      padding: 0
    }
  };
};
export const toggleButtonGroupStyles = theme => {
  return getToggleButtonGroupStyles(theme);
};

//Keep class names in alphabetical order to maintain our sanity
const getToggleButtonStyles = theme => {
  return {
    checked: {
      backgroundColor: theme.palette.common.minBlack,
      color: theme.palette.common.darkWhite,
      '&:hover': {
        backgroundColor: theme.palette.common.minBlack
      },
      '&$disabled': {
        boxShadow: theme.shadows[0],
        color: theme.palette.action.disabled,
        backgroundColor: theme.palette.common.minBlack,
        '&:hover': {
          backgroundColor: theme.palette.common.minBlack
        }
      },
      pointerEvents: 'none'
    },
    default: {
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      color: theme.palette.text.primary,
      margin: '0.5px'
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    input: {
      cursor: 'inherit',
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0
    },
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'none'
    }
  };
};
export const toggleButtonStyles = theme => {
  return getToggleButtonStyles(theme);
};

//Keep class names in alphabetical order to maintain our sanity
const getTomisDurationStyles = theme => {
  return {
    checkbox: {
      color: theme.palette.text.primary,
      width: `${checkboxW}px`,
      height: `${checkboxW}px`,
      alignSelf: 'flex-end'
    },
    checkboxDisabled: {
      color: theme.palette.text.disabled
    },
    formControl: {
      marginTop: 0,
      width: '100%',
      flex: 1
    },
    formHelperTextCloneable: {
      marginLeft: `${Number(1.25 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
    },
    header: {
      width: '72px'
    },
    headerCloneable: {
      width: '130px',
      marginLeft: '2px'
    },
    inputBase: {
      marginLeft: 0,
      width: '24px',
      outline: 'none',
      border: 'none',
      fontSize: '16px'
    },
    inputDisabled: {
      backgroundColor: 'transparent',
      color: theme.palette.text.disabled
    },
    inputLabel: {
      marginLeft: 0
    },
    plusSign: {
      alignSelf: 'flex-end',
      margin: '0 10% 8px 10%'
    },
    readOnly: {
      pointerEvents: 'none'
    },
    textFieldRoot: {
      marginTop: 0
    }
  };
};
export const tomisDurationStyles = theme => {
  return getTomisDurationStyles(theme);
};
