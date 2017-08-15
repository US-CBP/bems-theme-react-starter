/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { WithNotes } from '@storybook/addon-notes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import TomisSelect from './TomisSelect';
import TomisButtonRaisedSimplePrimary from './TomisButtonRaisedSimplePrimary';
import TomisCheckbox from './TomisCheckbox';
import TomisCheckboxInline from './TomisCheckboxInline';
import TomisCalendar from './TomisCalendar';
import TomisCalendarCloning from './TomisCalendarCloning';
import TomisDatePickerInlineLandscape from './TomisDatePicker';
import TomisDialogExample from './TomisDialogExample';
import TomisDrawerNavigationExample from './TomisDrawerNavigationExample';
import TomisDuration from './TomisDuration';
import TomisFileAttachment from './TomisFileAttachment';
import TomisFontIconMaterialExample from './TomisFontIconMaterialExample';
import TomisListSimpleExample from './TomisListSimpleExample';
import TomisListNestedExample from './TomisListNestedExample';
import TomisMenuExample from './TomisMenuExample';
import TomisPanelExample from './TomisPanelExample';
import TomisPopoverExample from './TomisPopoverExample';
import TomisProgressRefreshLoading from './TomisProgressRefreshLoading';
import TomisTableEditableExample from './TomisTableEditableExample';
import TomisTextArea from './TomisTextarea';
import TomisToggle from './TomisToggle';
import TomisInput from './TomisInput';
import TomisToolbarActionBar from './TomisToolbarActionBar';
import TomisToolbarCbpHeader from './TomisToolbarCbpHeader';
import '../css/index.css';

const theme = getMuiTheme(tomisTheme);

storiesOf('TOMIS App', module)
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
    .add('AutoComplete (LOV)', () => {
        return <TomisSelect />;
    })
    .add('Button - Raised, Simple, Primary', () => {
        return <TomisButtonRaisedSimplePrimary />;
    })
    .add('Date Picker - Inline, Landscape', () => {
        return <TomisDatePickerInlineLandscape />;
    })
    .add('Dialog - Modal Example', () => {
        return <TomisDialogExample initOpen={true}>Only actions can close this dialog.</TomisDialogExample>;
    })
    .add('Drawer - Navigation Example', () => {
        return <TomisDrawerNavigationExample />;
    })
    .add('Icon - Font, Material Examples', () => {
        return <TomisFontIconMaterialExample />;
    })
    .add('List - Simple Example', () => {
        return <TomisListSimpleExample />;
    })
    .add('List - Nested Example', () => {
        return <TomisListNestedExample />;
    })
    .add('Menu - Example', () => {
        return <TomisMenuExample />;
    })
    .add('Panel Example', () => {
        return <TomisPanelExample />;
    })
    .add('Popover - Example', () => {
        return <TomisPopoverExample label="Toggle Popover" />;
    })
    .add('Progress Refresh - Loading', () => {
        return <TomisProgressRefreshLoading />;
    })
    .add('Text Area - Pending', () => {
        return <TomisTextArea floatingLabelText="Enter Info in Text Area" charCountMax={40} />;
    })
    .add('Text Field - Pending', () => {
        return <TomisInput floatingLabelText="Sample Text Field" />;
    })
    .add('Checkbox', () => {
        return <TomisCheckbox label="Checkbox align with text field" />;
    })
    .add('Checkbox Inline', () => {
        return (
            <div className="flex-row">
                <TomisCheckboxInline label="Checkbox 1" />
                <TomisCheckboxInline label="Checkbox 2" />
                <TomisCheckboxInline label="Checkbox 3" />
            </div>
        );
    })
    .add('Table Editable - Example', () => {
        return <TomisTableEditableExample />;
    })
    .add('Toggle Button', () => {
        return <TomisToggle />;
    })
    .add('Toolbar, Action Bar', () => {
        return <TomisToolbarActionBar />;
    })
    .add('Toolbar, CBP Header', () => {
        return <TomisToolbarCbpHeader />;
    })
    .add('File Attachment', () => {
        return <TomisFileAttachment label="My File Attachment Label" />;
    })
    .add('Calendar - Example, Pending', () => {
        return <TomisCalendar />;
    })
    .add('Calendar, Cloning', () => {
        return <TomisCalendarCloning />;
    })
    .add('TOMIS Duration', () => {
        return <TomisDuration isCloneable={true} disabledClone={false} />;
    });

function withNote(note, child) {
    return (
        <WithNotes notes={note}>
            {child || null}
        </WithNotes>
    );
}
