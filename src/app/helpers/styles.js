export const getStatusBarStyle = props => {
  const { muiTheme: { palette: { primary1Color } } } = props;
  return {
    backgroundColor: primary1Color
  };
};

export const getStatusBarTitleStyle = props => {
  const { muiTheme: { palette: { alternateTextColor } } } = props;
  return {
    color: alternateTextColor,
    marginLeft: '16px',
    lineHeight: '14px'
  };
};

export const getToolbarTitleStyle = props => {
  const { muiTheme: { palette: { alternateTextColor } } } = props;
  return {
    color: alternateTextColor
  };
};

export const getActionBarPopoverStyle = props => {
  return {
    marginLeft: '0',
    marginRight: '0',
    lineHeight: '12px',
    whiteSpace: 'nowrap'
  };
};

export const getActionBarLovStyle = props => {
  const { muiTheme: { palette: { alternateTextColor } } } = props;
  return {
    color: alternateTextColor
  };
};

export const getStatusBarSubTitleStyle = props => {
  const { muiTheme: { palette: { alternateTextColor } } } = props;
  return {
    color: alternateTextColor,
    lineHeight: '14px',
    fontStyle: 'italic',
    paddingLeft: '16px'
  };
};

export const getActionBarStyle = props => {
  const { muiTheme: { palette: { primary2Color } } } = props;
  return {
    backgroundColor: primary2Color
  };
};

export const getActionBarLabelStyle = props => {
  const { muiTheme: { palette: { secondaryTextColor } } } = props;
  return {
    color: secondaryTextColor
  };
};

export const getAppBarIconColor = props => {
  const { muiTheme: { palette: { secondaryTextColor } } } = props;
  return secondaryTextColor;
};

export const getActionBarIconColor = props => {
  const { muiTheme: { palette: { secondaryTextColor } } } = props;
  return secondaryTextColor;
};

export const getLoggedInSocialPersonStyle = props => {
  return {
    minWidth: '24px'
  };
};

export const getDrawerNavigationIconColor = props => {
  const { muiTheme: { palette: { primaryTextColor } } } = props;
  return primaryTextColor;
};

// export const getFloatingLabelStyle = props => {
//     const { muiTheme: { palette: { textColor } } } = props;
//     return {
//         color: textColor,
//         borderColor: textColor
//     };
// };

export const getTextFieldAlternateTextStyle = props => {
  const { muiTheme: { palette: { alternateTextColor } } } = props;
  return {
    color: alternateTextColor,
    borderColor: alternateTextColor
  };
};

export const getTextFieldDisabledTextStyle = props => {
  const { muiTheme: { palette: { disabledColor } } } = props;
  return {
    color: disabledColor,
    borderColor: disabledColor
  };
};

export const getDrawerSearchTextFieldFocusStyle = props => {
  const { muiTheme: { palette: { accent1Color } } } = props;
  return {
    color: accent1Color,
    borderColor: accent1Color
  };
};

export const getDrawerSearchListStyle = props => {
  return { paddingBottom: '0' };
};

export const getDrawerSearchListItemStyle = props => {
  return { paddingLeft: '0', paddingRight: '0', paddingBottom: '0', paddingTop: '0' };
};
