/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from 'storybook-addon-material-ui';
import AppBars from './AppBars';
import AutoCompletes from './AutoCompletes';
import Avatars from './Avatars';
import Badges from './Badges';
import BottomNavigations from './BottomNavigations';
import Buttons from './Buttons';
import Cards from './Cards';
import Chips from './Chips';
import DatePickers from './DatePickers';
import Dialogs from './Dialogs';
import Dividers from './Dividers';
import Drawers from './Drawers';
import GridLists from './GridLists';
import HeaderNavAction from './HeaderNavAction';
import Icons from './Icons';
import Lists from './Lists';
import Menus from './Menus';
import Papers from './Papers';
import Popovers from './Popovers';
import Progresses from './Progresses';
import SelectFields from './SelectFields';
import Sliders from './Sliders';
import Switches from './Switches';
import Snackbars from './Snackbars';
import Steppers from './Steppers';
import Subheaders from './Subheaders';
import TableEditable from './TableEditable';
import TableReadOnly from './TableReadOnly';
import Tabs from './Tabs';
import TextFields from './TextFields';
import TimePickers from './TimePickers';
import ToolbarHeader from './ToolbarHeader';
import ToolbarNavigation from './ToolbarNavigation';
import ToolbarActionBar from './ToolbarActionBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

const theme = getMuiTheme({
    "spacing": {
        "iconSize": 24,
        "desktopGutter": 24,
        "desktopGutterMore": 32,
        "desktopGutterLess": 16,
        "desktopGutterMini": 8,
        "desktopKeylineIncrement": 64,
        "desktopDropDownMenuItemHeight": 32,
        "desktopDropDownMenuFontSize": 15,
        "desktopDrawerMenuItemHeight": 48,
        "desktopSubheaderHeight": 48,
        "desktopToolbarHeight": 56
    },
    "fontFamily": "Roboto,sans-serif",
    "palette": {
        "primary1Color": "#0D47A1",
        "primary2Color": "#2196f3",
        "primary3Color": "#eeeeee",
        "accent1Color": "#ff4081",
        "accent2Color": "#f5f5f5",
        "accent3Color": "#9e9e9e",
        "textColor": "rgba(0,0,0,0.66)",
        "secondaryTextColor": "#ffffff",
        "alternateTextColor": "#ffffff",
        "canvasColor": "#ffffff",
        "alternateСanvasColor": "#212121",
        "alternate1Color": "rgba(255, 255, 255, 0.54)",
        "alternate2Color": "#f5f5f5",
        "borderColor": "#bdbdbd",
        "disabledColor": "rgba(0,0,0,0.3)",
        "pickerHeaderColor": "#00bcd4",
        "clockCircleColor": "rgba(0,0,0,0.07)",
        "shadowColor": "rgba(0,0,0,1)"
    },
    "themeName": "TomisTheme",
    "themeFile": "tomisTheme.json"
}
)

storiesOf('TOMIS', module)
    .addDecorator((story) => {
        const storyKind = story();
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', minWidth: 600 }} >
                <MuiThemeProvider muiTheme={theme}>
                    {storyKind}
                </MuiThemeProvider>
            </div>
          </div>);
    })
    .addDecorator(muiTheme(themesList))
    .add('Action Bar - Unapproved', () => {
        return <ToolbarActionBar />
    })
    .add('AppBar - Unapproved', () => {
        return <AppBars />
    })
    .add('AutoComplete - Unapproved', () => {
        return <AutoCompletes />
    })
    .add('Avatar - Unapproved', () => {
        return <Avatars />
    })
    .add('Badge - Unapproved', () => {
        return <Badges />
    })
    .add('Bottom Navigation - Unapproved', () => {
        return <BottomNavigations />
    })
    .add('Buttons - Unapproved', () => {
        return <Buttons />
    })
    .add('Cards - Unapproved', () => {
        return <Cards />
    })
    .add('Chip - Unapproved', () => {
        return <Chips />
    })
    .add('Date Picker - Unapproved', () => {
        return <DatePickers />
    })
    .add('Dialog - Unapproved', () => {
        return <Dialogs />
    })
    .add('Divider - Unapproved', () => {
        return <Dividers />
    })
    .add('Drawer - Unapproved', () => {
        return <Drawers />
    })
    .add('Grid List - Unapproved', () => {
        return <GridLists />
    })
    .add('Header - Unapproved', () => {
        return <ToolbarHeader />
    })
    .add('Header, Nav, Action - Unapproved', () => {
        return <HeaderNavAction />
    })
    .add('Icon - Unapproved', () => {
        return <Icons />
    })
    .add('List - Unapproved', () => {
        return <Lists />
    })
    .add('Menus - Unapproved', () => {
        return <Menus />
    })
    .add('Navigation - Unapproved', () => {
        return <ToolbarNavigation />
    })
    .add('Paper - Unapproved', () => {
        return <Papers />
    })
    .add('Popover - Unapproved', () => {
        return <Popovers />
    })
    .add('Progress - Unapproved', () => {
        return <Progresses />
    })
    .add('Select Field - Unapproved', () => {
        return <SelectFields />
    })
    .add('Slider - Unapproved', () => {
        return <Sliders />
    })
    .add('Switch - Unapproved', () => {
        return <Switches />
    })
    .add('Snackbar - Unapproved', () => {
        return <Snackbars />
    })
    .add('Stepper - Unapproved', () => {
        return <Steppers />
    })
    .add('Subheader - Unapproved', () => {
        return <Subheaders />
    })
    .add('Tabs - Unapproved', () => {
        return <Tabs />
    })
    .add('Text Field - Unapproved', () => {
        return <TextFields />
    })
    .add('Time Picker - Unapproved', () => {
        return <TimePickers />
    })
    .add('Table, Read-Only - Unapproved', () => {
    return (
        <TableReadOnly />
        )
    })
    .add('Table, Editable - Unapproved', () => {
    return (
        <TableEditable />
        )
    })
    .add('Table Read-Only in Panel - Unapproved', () => {
    return (
        <TableReadOnly />
    )
    })
