'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getStatusBarStyle = exports.getStatusBarStyle = function getStatusBarStyle(props) {
  var primary1Color = props.muiTheme.palette.primary1Color;

  return {
    backgroundColor: primary1Color
  };
};

var getStatusBarTitleStyle = exports.getStatusBarTitleStyle = function getStatusBarTitleStyle(props) {
  var alternateTextColor = props.muiTheme.palette.alternateTextColor;

  return {
    color: alternateTextColor,
    marginLeft: '16px',
    lineHeight: '14px'
  };
};

var getToolbarTitleStyle = exports.getToolbarTitleStyle = function getToolbarTitleStyle(props) {
  var alternateTextColor = props.muiTheme.palette.alternateTextColor;

  return {
    color: alternateTextColor
  };
};

var getActionBarPopoverStyle = exports.getActionBarPopoverStyle = function getActionBarPopoverStyle(props) {
  return {
    marginLeft: '0',
    marginRight: '0',
    lineHeight: '12px',
    whiteSpace: 'nowrap'
  };
};

var getActionBarLovStyle = exports.getActionBarLovStyle = function getActionBarLovStyle(props) {
  var alternateTextColor = props.muiTheme.palette.alternateTextColor;

  return {
    color: alternateTextColor
  };
};

var getStatusBarSubTitleStyle = exports.getStatusBarSubTitleStyle = function getStatusBarSubTitleStyle(props) {
  var alternateTextColor = props.muiTheme.palette.alternateTextColor;

  return {
    color: alternateTextColor,
    lineHeight: '14px',
    fontStyle: 'italic',
    paddingLeft: '16px'
  };
};

var getActionBarStyle = exports.getActionBarStyle = function getActionBarStyle(props) {
  var primary2Color = props.muiTheme.palette.primary2Color;

  return {
    backgroundColor: primary2Color
  };
};

var getActionBarLabelStyle = exports.getActionBarLabelStyle = function getActionBarLabelStyle(props) {
  var secondaryTextColor = props.muiTheme.palette.secondaryTextColor;

  return {
    color: secondaryTextColor
  };
};

var getAppBarIconColor = exports.getAppBarIconColor = function getAppBarIconColor(props) {
  var secondaryTextColor = props.muiTheme.palette.secondaryTextColor;

  return secondaryTextColor;
};

var getActionBarIconColor = exports.getActionBarIconColor = function getActionBarIconColor(props) {
  var secondaryTextColor = props.muiTheme.palette.secondaryTextColor;

  return secondaryTextColor;
};

var getLoggedInSocialPersonStyle = exports.getLoggedInSocialPersonStyle = function getLoggedInSocialPersonStyle(props) {
  return {
    minWidth: '24px'
  };
};

var getDrawerNavigationIconColor = exports.getDrawerNavigationIconColor = function getDrawerNavigationIconColor(props) {
  var primaryTextColor = props.muiTheme.palette.primaryTextColor;

  return primaryTextColor;
};

// export const getFloatingLabelStyle = props => {
//     const { muiTheme: { palette: { textColor } } } = props;
//     return {
//         color: textColor,
//         borderColor: textColor
//     };
// };

var getTextFieldAlternateTextStyle = exports.getTextFieldAlternateTextStyle = function getTextFieldAlternateTextStyle(props) {
  var alternateTextColor = props.muiTheme.palette.alternateTextColor;

  return {
    color: alternateTextColor,
    borderColor: alternateTextColor
  };
};

var getTextFieldDisabledTextStyle = exports.getTextFieldDisabledTextStyle = function getTextFieldDisabledTextStyle(props) {
  var disabledColor = props.muiTheme.palette.disabledColor;

  return {
    color: disabledColor,
    borderColor: disabledColor
  };
};

var getDrawerSearchTextFieldFocusStyle = exports.getDrawerSearchTextFieldFocusStyle = function getDrawerSearchTextFieldFocusStyle(props) {
  var accent1Color = props.muiTheme.palette.accent1Color;

  return {
    color: accent1Color,
    borderColor: accent1Color
  };
};

var getDrawerSearchListStyle = exports.getDrawerSearchListStyle = function getDrawerSearchListStyle(props) {
  return { paddingBottom: '0' };
};

var getDrawerSearchListItemStyle = exports.getDrawerSearchListItemStyle = function getDrawerSearchListItemStyle(props) {
  return { paddingLeft: '0', paddingRight: '0', paddingBottom: '0', paddingTop: '0' };
};