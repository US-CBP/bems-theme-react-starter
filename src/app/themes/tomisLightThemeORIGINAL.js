import indigo from 'material-ui/colors/indigo';
import amber from 'material-ui/colors/amber';

const primary1Color = indigo['900'];
const primary2Color = indigo['600'];
const accent1Color = amber['700'];
const textColor = 'rgba(0,0,0,0.87)';

const tomisTheme = {
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
        type: 'light',
        primary: {
            '50': '#e3f2fd',
            '100': '#bbdefb',
            '200': '#90caf9',
            '300': '#64b5f6',
            '400': '#42a5f5',
            '500': '#2196f3',
            '600': '#1e88e5',
            '700': '#1976d2',
            '800': '#1565c0',
            '900': primary1Color,
            A100: '#82b1ff',
            A200: '#448aff',
            A400: '#2979ff',
            A700: primary1Color,
            contrastDefaultColor: 'light'
        },
        //Primary = Indigo
        primary1Color,
        primary2Color,
        primary3Color: indigo['100'],
        //Accent = Amber
        accent1Color,
        accent2Color: amber['400'],
        accent3Color: amber['100'],
        textColor,
        secondaryTextColor: '#ffffff',
        alternateTextColor: '#ffffff',
        canvasColor: '#ffffff',
        alternateСanvasColor: '#212121',
        alternate1Color: 'rgba(255, 255, 255, 0.54)',
        alternate2Color: '#f5f5f5',
        borderColor: '#bdbdbd',
        disabledColor: 'rgba(0,0,0,0.3)',
        pickerHeaderColor: '#1A237E',
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
export default tomisTheme;
