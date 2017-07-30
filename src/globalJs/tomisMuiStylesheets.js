import { createStyleSheet } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import tomisTheme from 'app/themes/tomisLightTheme.js';

const theme = createMuiTheme(createPalette(tomisTheme));

const checkboxSize = 24;
const checkboxW = 48;
const checkboxMRFactor = 1.15;

export const getDisplayVals = ({ disabled, isCloneable, disabledClone, readOnly, placeholder }) => {
  console.log('getDisplayVals disabled, isCloneable, disabledClone, readOnly, placeholder=', disabled, isCloneable, disabledClone, readOnly, placeholder);
  const isDisabled = readOnly ? true : disabled ? true : false;
  const displayPlaceholder = readOnly ? '' : placeholder;
  const isDisplayCloneable = isCloneable && !readOnly;
  return { isDisabled, displayPlaceholder, isDisplayCloneable };
};

export const cloneableStyleSheet = createStyleSheet('CloneableRender', theme => ({
  formControl: {
    width: '100%',
    flex: 1
  },
  lov: {
    marginLeft: '4px',
    width: '100%'
  },
  lovCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${-1 * (checkboxW - checkboxSize) * 0.5}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectArrow: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${0}px`,
    width: '36px',
    height: '36px'
  }
}));

export const autoCompleteStyleSheet = createStyleSheet('AutoCompleteRender', theme => ({
  formControl: {
    width: '100%',
    flex: 1
  },
  lov: {
    marginLeft: '4px',
    width: '100%'
  },
  lovCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${-1 * (checkboxW - checkboxSize) * 0.5}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectArrow: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${0}px`,
    width: '36px',
    height: '36px'
  }
}));

export const datePickerStyles = {
  formControl: {
    width: '100%',
    flex: 1
  },
  dp: {
    marginLeft: '4px',
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  },
  dpCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor).toFixed(0)}px`,
    width: '100%',
    height: `${30}px`,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  },
  inputLabel: {
    marginLeft: '5px'
  },
  inputLabelCloneable: {
    marginLeft: `${Number(checkboxSize * checkboxMRFactor + 1).toFixed(0)}px`
  },
  checkbox: {
    color: theme.text.primary,
    width: `${checkboxW}px`,
    height: `${checkboxW}px`,
    position: 'absolute',
    zIndex: 1,
    left: `${-1 * (checkboxW - checkboxSize) * 0.5}px`,
    top: '-8px'
  },
  checkboxDisabled: {
    color: theme.text.disabled
  },
  selectCalendar: {
    color: theme.text.primary,
    position: 'absolute',
    right: 0,
    top: `${-2}px`,
    width: '36px',
    height: '36px'
  },
  selectCalendarDisabled: {
    color: theme.text.disabled
  }
};

export const datePickerStyleSheet = createStyleSheet('DatePickerRender', theme => datePickerStyles);