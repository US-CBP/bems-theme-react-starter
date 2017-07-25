/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
// import AutoComplete from './AutoComplete';
// import AutoCompleteInfo from './AutoCompleteInfo';
// import ButtonRaisedSimplePrimary from './ButtonRaisedSimplePrimary';
// import ButtonRaisedComplexPrimary from './ButtonRaisedComplexPrimary';
// import ButtonIconFurther from './ButtonIconFurther';
// import CardExpandable from './CardExpandable';
// import DatePickerInlineLandscape from './DatePickerInlineLandscape';
// import DialogModal from './DialogModal';
// import DividerMenu from './DividerMenu';
// import DrawerNavigation from './DrawerNavigation';
// import MenuItem from 'material-ui/MenuItem';
// import DrawerUndocked from './DrawerUndocked';
// import FileAttachment from '../BemsMui/FileAttachment';
// import IconFontMaterial from './IconFontMaterial';
// import { ListItem } from 'material-ui/List';
// import ListSimple from './ListSimple';
// import ListNested from './ListNested';
// import MenuSimple from './MenuSimple';
// import PanelExample from '../BemsMui/PanelExample';
// import Paper from '../BemsMui/Paper';
// import PopoverSimple from './PopoverSimple';
// import ProgressRefreshLoading from './ProgressRefreshLoading';
// import SwitchCheckbox from './SwitchCheckbox';
// import SnackbarSimple from './SnackbarSimple';
// import TableEditable from './TableEditable';
// import TextArea from './TextArea';
// import TextFieldSimple from './TextFieldSimple';
// import TextFieldSimpleDefaultValue from './TextFieldSimpleDefaultValue';
// import TimeSpinner from '../BemsMui/TimeSpinner';
// import ToggleButtons from '../BemsMui/ToggleButtons';
// import ToolbarActionBar from './ToolbarActionBar';
// import ToolbarCbpHeader from './ToolbarCbpHeader';
import tomisTheme from '../app/themes/tomisLightTheme.js';
// import Divider from 'material-ui/Divider';
import FontIcon from 'BemsMui/FontIcon';
import '../css/index.css';

const theme = createMuiTheme(createPalette(tomisTheme));

storiesOf('BEMS Mui', module).addDecorator(story => {
    const storyKind = story();
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', minWidth: 600 }}>
                <MuiThemeProvider theme={theme}>
                    {storyKind}
                </MuiThemeProvider>
            </div>
        </div>
    );
});
// .add('AutoComplete', () => {
//     return <AutoComplete />;
// });
/*.add('AutoComplete Info - Pending', () => {
        return <AutoCompleteInfo />;
    })
    .add('Button - Raised, Simple, Primary', () => {
        return <ButtonRaisedSimplePrimary />;
    })
    .add('Button - Raised, Complex (Icon), Primary', () => {
        return <ButtonRaisedComplexPrimary />;
    })
    .add('Button - Icon, Further (Tooltip)', () => {
        return <ButtonIconFurther />;
    })
    .add('Card - Expandable', () => {
        return <CardExpandable />;
    })
    .add('Date Picker - Inline, Landscape', () => {
        return <DatePickerInlineLandscape />;
    })
    .add('Dialog - Modal', () => {
        return <DialogModal initOpen={true}>Only actions can close this dialog.</DialogModal>;
    })
    .add('Divider - Menu', () => {
        return <DividerMenu />;
    })
    .add('Drawer - Undocked', () => {
        return (
            <DrawerUndocked initOpen={true}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </DrawerUndocked>
        );
    })
    .add('Drawer - Navigation - Pending', () => {
        return <DrawerNavigation />;
    })
    .add('Icon - Font, Material', () => {
        return <IconFontMaterial />;
    })
    .add('List - Simple Example', () => {
        return (
            <ListSimple>
                <ListItem primaryText="Inbox" leftIcon={<FontIcon name="inbox" />} />
                <ListItem primaryText="Starred" leftIcon={<FontIcon name="grade" />} />
                <ListItem primaryText="Sent mail" leftIcon={<FontIcon name="send" />} />
                <ListItem primaryText="Drafts" leftIcon={<FontIcon name="drafts" />} />
                <ListItem primaryText="Inbox" leftIcon={<FontIcon name="inbox" />} />
            </ListSimple>
        );
    })
    .add('List - Nested', () => {
        return <ListNested />;
    })
    .add('Menu - Simple Example', () => {
        return (
            <MenuSimple>
                <MenuItem primaryText="Maps" />
                <MenuItem primaryText="Books" />
                <MenuItem primaryText="Flights" />
                <MenuItem primaryText="Apps" />
            </MenuSimple>
        );
    })
    .add('Panel Example', () => {
        return <PanelExample />;
    })
    .add('Paper Example', () => {
        return <Paper style={{ width: '100px', height: '300px' }} zDepth={1} />;
    })
    .add('Popover - Simple', () => {
        return <PopoverSimple label="Toggle Popover" />;
    })
    .add('Progress Refresh - Loading', () => {
        return <ProgressRefreshLoading />;
    })
    .add('Switch - Checkbox', () => {
        return <SwitchCheckbox />;
    })
    .add('Snackbar - Simple', () => {
        return <SnackbarSimple initOpen={true} message="Message from outer space" />;
    })
    .add('Text Area - Pending', () => {
        return <TextArea floatingLabelText="Enter Info in Text Area" charCountMax={40} />;
    })
    .add('Text Field - Pending', () => {
        // return <TextFieldSimple charCountMax={40} />;
        return <TextFieldSimple />;
    })
    .add('Text Field, Default Value - Pending', () => {
        return <TextFieldSimpleDefaultValue />;
    })
    .add('Table Example - Read-Only', () => {
        return <TableReadOnly />;
    })
    .add('Table Example - Editable', () => {
        return <TableEditable />;
    })
    .add('Toolbar, Action Bar', () => {
        return <ToolbarActionBar />;
    })
    .add('Toolbar, CBP Header', () => {
        return <ToolbarCbpHeader />;
    })
    .add('Toggle Buttons - Pending', () => {
        return <ToggleButtons />;
    })
    // .add('Toggle Buttons Two - Pending', () => {
    //   return <ToggleButtonsTwo />;
    // })
    .add('File Attachment - Pending', () => {
        return <FileAttachment />;
    })
    .add('Time Spinner - Pending', () => {
        return <TimeSpinner />;
    });*/
