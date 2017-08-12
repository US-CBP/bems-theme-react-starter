import { createStyleSheet } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import tomisTheme from 'app/themes/tomisLightTheme.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import _get from 'lodash/get';
import { RIPPLE_TIME_MS } from 'globalJs/constants';

const theme = createMuiTheme(createPalette(tomisTheme));

const checkboxSize = 24;
const checkboxW = 36;
const checkboxMRFactor = 1.15;
const twoIconMRFactor = 1.75;

export const getDisplayVals = ({ disabled, isCloneable, disabledClone, readOnly, placeholder }) => {
  const isDisabled = disabled ? true : false;
  const displayPlaceholder = disabled ? '' : placeholder;
  const isDisplayCloneable = isCloneable;
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
const autoCompleteStyles = {
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
    paddingLeft: 0
  },
  inputCloneable: {
    paddingLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inputLabel: {
    marginLeft: '5px',
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
    marginLeft: '4px',
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
export const autoCompleteStyleSheet = createStyleSheet('TomisAutoComplete', theme => {
  console.log('tomisMuiStylesheets theme=', theme);
  return autoCompleteStyles;
});

//Keep class names in alphabetical order to maintain our sanity
//  NOTE, however, material-ui applies the class names in the order specified by the keys listed in styles.
//  For example, inputBaseMultiLine is always placed before inputCloneable in the React component.  If you
//  need inputBaseMultiLine to occur *after* inputCloneable, you need to include inputBaseMultiLine after
//  inputCloneable here.
const cloneableStyles = {
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
    marginLeft: '4px',
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    fontSize: '14px'
  },
  inputBaseMultiLine: {
    marginLeft: '4px',
    width: '100%',
    outline: 'none',
    border: 'none'
  },
  inputCloneable: {
    marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inputDisabled: {
    backgroundColor: 'transparent'
  },
  inputLabel: {
    marginLeft: '4px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  lov: {
    marginLeft: '4px',
    width: '100%'
  },
  lovCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%'
  }
};
export const cloneableStyleSheet = createStyleSheet('TomisCloneable', theme => cloneableStyles);

//Keep class names in alphabetical order to maintain our sanity
const datePickerStyles = {
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
    marginLeft: '4px',
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    fontSize: '14px'
  },
  inputCloneable: {
    marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inputDisabled: {
    backgroundColor: 'transparent'
  },
  inputLabel: {
    marginLeft: '5px'
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
export const datePickerStyleSheet = createStyleSheet('TomisDatePicker', theme => {
  console.log('tomisMuiStylesheets theme=', theme);
  return datePickerStyles;
});

//Keep class names in alphabetical order to maintain our sanity
const timeSpinnerStyles = {
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
    marginLeft: '4px',
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    fontSize: '14px'
  },
  inputCloneable: {
    marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inputLabel: {
    marginLeft: `${Number(1 * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  },
  inputLabelCloneable: {
    marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  inputSpinner: {
    marginLeft: `${Number(twoIconMRFactor * checkboxSize * checkboxMRFactor).toFixed(0)}px`
  }
};
export const timeSpinnerStyleSheet = createStyleSheet('TomisTimeSpinner', theme => timeSpinnerStyles);

//Keep class names in alphabetical order to maintain our sanity
const toggleButtonGroupStyles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    margin: 0,
    padding: 0
  }
};
export const toggleButtonGroupStyleSheet = createStyleSheet('TomisToggleButtonGroup', theme => toggleButtonGroupStyles);

//Keep class names in alphabetical order to maintain our sanity
const toggleButtonStyles = {
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
  }
};
export const toggleButtonStyleSheet = createStyleSheet('TomisToggleButton', theme => {
  console.log('tomisMuiStylesheets theme=', theme);
  return toggleButtonStyles;
});
