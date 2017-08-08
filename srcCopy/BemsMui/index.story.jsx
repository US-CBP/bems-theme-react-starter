/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import AutoComplete from './AutoComplete';
import DatePicker from './DatePicker';
import TimeSpinner from './TimeSpinner';
// import AutoCompleteInfo from './AutoCompleteInfo';
// import ButtonRaisedSimplePrimary from './ButtonRaisedSimplePrimary';
// import ButtonRaisedComplexPrimary from './ButtonRaisedComplexPrimary';
// import ButtonIconFurther from './ButtonIconFurther';
// import CardExpandable from './CardExpandable';
// import DatePickerInlineLandscape from './DatePickerInlineLandscape';
import DialogConfirmation from './DialogConfirmation';
// import DividerMenu from './DividerMenu';
// import DrawerNavigation from './DrawerNavigation';
import { MenuItem } from 'material-ui/Menu';
// import DrawerUndocked from './DrawerUndocked';
// import FileAttachment from '../BemsMui/FileAttachment';
// import IconFontMaterial from './IconFontMaterial';
// import { ListItem } from 'material-ui/List';
// import ListNested from './ListNested';
import MenuSimpleExample from './MenuSimpleExample';
import PanelExample from './PanelExample';
// import Paper from '../BemsMui/Paper';
// import PopoverSimple from './PopoverSimple';
// import ProgressRefreshLoading from './ProgressRefreshLoading';
import SelectionControlsCheckbox from './SelectionControlsCheckbox';
// import SnackbarSimple from './SnackbarSimple';
import TableEditable from './TableEditable';
import TableReadOnly from './TableReadOnly';
import TomisTextFieldMultiline from './TomisTextFieldMultiline';
import TomisTextFieldSingleline from './TomisTextFieldSingleline';
import TomisTextFieldReadOnly from './TomisTextFieldReadOnly';
// import TextFieldSimpleDefaultValue from './TextFieldSimpleDefaultValue';
// import TimeSpinner from '../BemsMui/TimeSpinner';
import ToggleButtons from './ToggleButtons';
// import ToolbarActionBar from './ToolbarActionBar';
// import ToolbarCbpHeader from './ToolbarCbpHeader';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import Divider from './Divider';
import FontIcon from './FontIcon';
import ButtonFlat from './ButtonFlat';
import ButtonRaised from './ButtonRaised';
import ButtonIcon from './ButtonIcon';
import DrawerLeft from './DrawerLeft';
import ListSimpleExample from './ListSimpleExample';
import ProgressCircular from './ProgressCircular';
import '../css/index.css';

const theme = createMuiTheme(createPalette(tomisTheme));

storiesOf('BEMS Mui', module)
    .addDecorator(story => {
        const storyKind = story();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', minWidth: 600, marginLeft: '64px', marginRight: '64px' }}>
                    <MuiThemeProvider theme={theme}>
                        {storyKind}
                    </MuiThemeProvider>
                </div>
            </div>
        );
    })
    .add('AutoComplete', () => {
        return <AutoComplete />;
    })
    .add('Date Picker', () => {
        return <DatePicker />;
    })
    .add('Time Spinner', () => {
        return <TimeSpinner />;
    })
    .add('Text Field Single-line - Pending', () => {
        return <TomisTextFieldSingleline label="My Singleline Label" placeholder="Singleline Placeholder" required={true} maxLength={10} isCloneable={true} />;
    })
    .add('Text Field ReadOnly - Pending', () => {
        return <TomisTextFieldReadOnly label="Read Only Label" placeholder="My Placeholder" required={true} value="My read-only val" />;
    })
    .add('Text Field Multi-line - Pending', () => {
        return <TomisTextFieldMultiline label="My Multiline Label" placeholder="Multiline Placeholder" rowsMax={10} isCloneable={true} />;
    })
    .add('Toggle Buttons - Pending', () => {
        return <ToggleButtons />;
    })
    .add('Dialog - Confirmation', () => {
        return <DialogConfirmation initIsOpen={true}>Only actions can close this dialog.</DialogConfirmation>;
    })
    .add('Divider', () => {
        return (
            <div>
                <br />
                <br />
                <Divider />
            </div>
        );
    })
    .add('Button Flat', () => {
        return (
            <div>
                <ButtonFlat label="My Flat Label" />
            </div>
        );
    })
    .add('Button Raised', () => {
        return (
            <div>
                <ButtonRaised label="My Raised Label" />
            </div>
        );
    })
    .add('Button Icon', () => {
        return (
            <div>
                <ButtonIcon icon={<FontIcon name="delete" />} />
            </div>
        );
    })
    .add('Drawer - Left', () => {
        return (
            <DrawerLeft isOpen={true}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </DrawerLeft>
        );
    })
    .add('List - Simple Example', () => {
        return <ListSimpleExample />;
    })
    .add('Menu - Simple Example', () => {
        return (
            <MenuSimpleExample open={true}>
                <MenuItem>Maps</MenuItem>
                <MenuItem>Books</MenuItem>
                <MenuItem>Flights</MenuItem>
                <MenuItem>Apps</MenuItem>
            </MenuSimpleExample>
        );
    })
    .add('Panel Example', () => {
        return <PanelExample />;
    })
    .add('Progress Circular', () => {
        return <ProgressCircular />;
    })
    .add('Selection Controls - Checkbox', () => {
        return <SelectionControlsCheckbox />;
    })
    .add('Table Example - Editable', () => {
        return <TableEditable />;
    })
    .add('Table Example - Read-Only', () => {
        return <TableReadOnly />;
    });

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
