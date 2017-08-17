import tomisTheme from 'app/themes/tomisLightTheme.js';

export const getStatusBarStyle = props => {
    const { muiTheme: { palette: { primary1Color } } } = props;
    return {
        backgroundColor: primary1Color
    };
};

export const getStatusBarTitleStyle = () => {
    return {
        color: tomisTheme.common.white,
        marginLeft: '16px',
        lineHeight: '14px'
    };
};

export const getToolbarTitleStyle = () => {
    return {
        color: tomisTheme.common.white
    };
};

export const getActionBarPopoverStyle = () => {
    return {
        marginLeft: '0',
        marginRight: '0',
        lineHeight: '12px',
        whiteSpace: 'nowrap'
    };
};

export const getActionBarLovStyle = () => {
    return {
        color: tomisTheme.common.white
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
    return {
        backgroundColor: tomisTheme.primary['600']
    };
};

export const getActionBarLabelStyle = props => {
    const { muiTheme: { palette: { secondaryTextColor } } } = props;
    return {
        color: secondaryTextColor
    };
};

export const getAppBarIconColor = () => {
    return tomisTheme.common.white;
};

export const getActionBarIconColor = props => {
    return tomisTheme.common.white;
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

//Keep class names in alphabetical order to maintain our sanity
const getHeaderNavActionStyles = theme => {
    return {
        actionBar: {
            backgroundColor: theme.palette.primary['600']
        },
        drawer: {
            width: '360px'
        },
        drawerList: {
            paddingTop: 0
        },
        firstGroup: {
            marginLeft: '16px'
        },
        flatPrimary: {
            color: theme.palette.common.white
        },
        headerBar: {
            backgroundColor: theme.palette.primary['900']
        },
        listItemFirst: {
            paddingTop: 0
        },
        pageTitle: {
            display: 'flex',
            alignItems: 'center'
        },
        text: {
            fontFamily: 'Roboto',
            color: theme.palette.common.white
        },
        textHeader: {
            fontSize: '20px'
        },
        textSubheader: {
            fontStyle: 'italic'
        },
        toolbar: {
            height: '56px',
            justifyContent: 'space-between',
            [theme.breakpoints.up('sm')]: {
                minHeight: 56
            }
        }
    };
};

export const headerNavActionStyles = theme => {
    return getHeaderNavActionStyles(theme);
};
