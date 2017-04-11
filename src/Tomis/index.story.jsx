/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBars from './AppBars';
import ActionBarToolbar from './ActionBarToolbar';
import AutoCompletes from './AutoCompletes';
import Avatars from './Avatars';
import Badges from './Badges';
import BottomNavigations from './BottomNavigations';
import Buttons from './Buttons';
import Cards from './Cards';
import CbpHeaderToolbar from './CbpHeaderToolbar';
import Chips from './Chips';
import DatePickers from './DatePickers';
import Dialogs from './Dialogs';
import Dividers from './Dividers';
import Drawers from './Drawers';
import GridLists from './GridLists';
import Icons from './Icons';
import Lists from './Lists';
import ListsNested from './ListsNested';
import Menus from './Menus';
import NavigationDrawer from './NavigationDrawer';
import Papers from './Papers';
import Popovers from './Popovers';
import Progresses from './Progresses';
import SelectFields from './SelectFields';
import Sliders from './Sliders';
import SwitchesCheckbox from './SwitchesCheckbox';
import SwitchesToggle from './SwitchesToggle';
import Snackbars from './Snackbars';
import Steppers from './Steppers';
import Subheaders from './Subheaders';
import TableReadOnly from './TableReadOnly';
import TableEditable from './TableEditable';
import Tabs from './Tabs';
import TextFields from './TextFields';
import TimePickers from './TimePickers';
import ToggleButtons from './ToggleButtons';
import Toolbars from './Toolbars';
import IconMenu from 'material-ui/IconMenu';
import IconButton from '../TomisMui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import { WithNotes } from '@kadira/storybook-addon-notes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';

const theme = getMuiTheme(tomisTheme);

storiesOf('TOMIS', module)
    .addDecorator(story => {
        const storyKind = story();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', minWidth: 600 }}>
                    <MuiThemeProvider muiTheme={theme}>
                        {storyKind}
                    </MuiThemeProvider>
                </div>
            </div>
        );
    })
    .add('AppBar', () => {
        return <AppBars />;
    })
    .add('AutoComplete', () => {
        return <AutoCompletes />;
    })
    .add('Avatar', () => {
        return <Avatars />;
    })
    .add('Badge', () => {
        return <Badges />;
    })
    .add('Bottom Navigation', () => {
        return <BottomNavigations />;
    })
    .add('Buttons', () => {
        return <Buttons />;
    })
    .add('Cards', () => {
        return <Cards />;
    })
    .add('Chip', () => {
        return <Chips />;
    })
    .add('Date Picker', () => {
        return <DatePickers />;
    })
    .add('Dialog', () => {
        return <Dialogs />;
    })
    .add('Divider', () => {
        return <Dividers />;
    })
    .add('Drawer', () => {
        return <Drawers />;
    })
    .add('Drawer - Navigation - Pending', () => {
        return <NavigationDrawer />;
    })
    .add('Grid List', () => {
        return <GridLists />;
    })
    .add('Icon', () => {
        return <Icons />;
    })
    .add('List', () => {
        return <Lists />;
    })
    .add('List Nested', () => {
        return <ListsNested />;
    })
    .add('Menus', () => {
        return <Menus />;
    })
    .add('Paper', () => {
        return <Papers />;
    })
    .add('Popover', () => {
        return <Popovers />;
    })
    .add('Progress', () => {
        return <Progresses />;
    })
    .add('Select Field', () => {
        return <SelectFields />;
    })
    .add('Slider', () => {
        return <Sliders />;
    })
    .add('Switches - Checkbox', () => {
        return <SwitchesCheckbox />;
    })
    .add('Switches - Toggle', () => {
        return <SwitchesToggle />;
    })
    .add('Snackbar', () => {
        return <Snackbars />;
    })
    .add('Stepper', () => {
        return <Steppers />;
    })
    .add('Subheader', () => {
        return <Subheaders />;
    })
    .add('Tabs', () => {
        return <Tabs />;
    })
    .add('Text Field - Pending', () => {
        return <TextFields />;
    })
    .add('Time Picker', () => {
        return <TimePickers />;
    })
    .add('Table, Read-Only', () => {
        return <TableReadOnly />;
    })
    .add('Table, Editable', () => {
        return <TableEditable />;
    })
    .add('Toggle Buttons - Pending', () => {
        return <ToggleButtons />;
    })
    .add('Toolbars', () => {
        return <Toolbars />;
    })
    .add('Toolbar, Action Bar - Pending', () => {
        return <ActionBarToolbar />;
    })
    .add('Toolbar, CBP Header - Pending', () => {
        return <CbpHeaderToolbar />;
    });

function withNote(note, child) {
    return <WithNotes notes={note}>{child || null}</WithNotes>;
}
