export const getStatusBarStyle = (props) => {
    const {muiTheme: {palette: {primary1Color}}} = props;
    return {
        backgroundColor: primary1Color,
        height: '36px'
    };
}

export const getStatusBarTitleStyle = (props) => {
    const {muiTheme: {palette: { alternateTextColor}}} = props;
    return {
        color: alternateTextColor,
        marginLeft: '6px'
    };
}

export const getAppBarStyle = (props) => {
    const {muiTheme: {palette: {primary2Color}}} = props;
    return {
        backgroundColor: primary2Color
    };
}

export const getActionBarStyle = (props) => {
    const {muiTheme: {palette: {primary3Color}}} = props;
    return {
        backgroundColor: primary3Color
    };
}

export const getActionBarIconColor = (props) => {
    const {muiTheme: {palette: {secondaryTextColor}}} = props;
    return secondaryTextColor;
}
