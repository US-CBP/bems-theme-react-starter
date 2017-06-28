'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('material-ui/styles/colors');

//import { blue900, blue700, blue600, blue500, blue400, blue300, blue200, blue100 } from 'material-ui/styles/colors';

var primary1Color = _colors.indigo900;
var primary2Color = _colors.indigo600;
var accent1Color = _colors.amber700;
var textColor = 'rgba(0,0,0,0.87)';

var tomisTheme = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto,sans-serif',
  palette: {
    //Primary = Indigo
    primary1Color: primary1Color,
    primary2Color: primary2Color,
    primary3Color: _colors.indigo100,
    //Accent = Amber
    accent1Color: accent1Color,
    accent2Color: _colors.amber400,
    accent3Color: _colors.amber100,
    textColor: textColor,
    secondaryTextColor: '#ffffff',
    alternateTextColor: '#ffffff',
    canvasColor: '#ffffff',
    alternateСanvasColor: '#212121',
    alternate1Color: 'rgba(255, 255, 255, 0.54)',
    alternate2Color: '#f5f5f5',
    borderColor: '#bdbdbd',
    disabledColor: 'rgba(0,0,0,0.3)',
    pickerHeaderColor: '#00bcd4',
    clockCircleColor: 'rgba(0,0,0,0.07)',
    shadowColor: 'rgba(0,0,0,1)'
  },
  checkbox: {
    checkedColor: accent1Color
  },
  radioButton: {
    borderColor: accent1Color,
    checkedColor: accent1Color
  },
  tableHeaderColumn: {
    textColor: 'rgba(0,0,0,0.54)'
  },
  toggleButton: {
    size: '36px',
    checkedBackgroundColor: 'rgba(0,0,0,0.27)',
    uncheckedBackgroundColor: '#ffffff',
    checkedLabelColor: 'rgba(0,0,0,0.87)',
    uncheckedLabelColor: 'rgba(0,0,0,0.54)'
  },
  toolbar: {
    backgroundColor: primary1Color
  },
  textField: {
    floatingLabelColor: textColor,
    borderColor: textColor
  },
  themeName: 'TomisLightTheme',
  themeFile: 'tomisLightTheme.json'
};
exports.default = tomisTheme;