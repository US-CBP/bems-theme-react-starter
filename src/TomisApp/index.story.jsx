/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import TomisAutocomplete from './TomisAutocomplete';
import TomisButtonFlat from './TomisButtonFlat';
import TomisButtonRaised from './TomisButtonRaised';
import TomisButtonIcon from './TomisButtonIcon';
import TomisDatePicker from './TomisDatePicker';
import TomisDialogConfirmation from './TomisDialogConfirmation';
import TomisDividerFullbleed from './TomisDividerFullbleed';
import TomisFontIcon from './TomisFontIcon';
import TomisTimeSpinner from './TomisTimeSpinner';
import TomisListNestedExample from './TomisListNestedExample';
import TomisMenuSimpleExample from './TomisMenuSimpleExample';
import { MenuItem } from 'material-ui/Menu';
import TomisNavigationDrawerUndockedExample from './TomisNavigationDrawerUndockedExample';
import TomisPanelExample from './TomisPanelExample';
import TomisProgressIndeterminateCircular from './TomisProgressIndeterminateCircular';
import TomisSelectionControlsCheckbox from './TomisSelectionControlsCheckbox';
import TomisTableEditableExample from './TomisTableEditableExample';
import TomisTableReadOnlyExample from './TomisTableReadOnlyExample';
import TomisTextFieldSingleLine from './TomisTextFieldSingleLine';
import TomisTextFieldMultiLine from './TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from './TomisTextFieldReadOnly';
import TomisToggleButtonsExample from './TomisToggleButtonsExample';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../css/index.css';

const theme = createMuiTheme({ palette: createPalette(tomisTheme) });

storiesOf('TOMIS App', module)
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
    return <TomisAutocomplete isCloneable={true} disabledClone={true} disabled={false} />;
  })
  .add('Button Flat', () => {
    return (
      <div>
        <TomisButtonFlat label="My Flat Label" />
      </div>
    );
  })
  .add('Button Raised', () => {
    return (
      <div>
        <TomisButtonRaised label="My Raised Label" />
      </div>
    );
  })
  .add('Button Icon', () => {
    return (
      <div>
        <TomisButtonIcon icon={<TomisFontIcon name="delete" />} />
      </div>
    );
  })
  .add('Date Picker', () => {
    return (
      <div>
        <TomisDatePicker label="My Date Picker" isCloneable={true} />
      </div>
    );
  })
  .add('Dialog - Confirmation', () => {
    return <TomisDialogConfirmation initIsOpen={true}>Only actions can close this dialog.</TomisDialogConfirmation>;
  })
  .add('Divider Full-bleed', () => {
    return (
      <div>
        <br />
        <br />
        <TomisDividerFullbleed />
      </div>
    );
  })
  .add('Drawer Navigation Undocked Example', () => {
    return (
      <TomisNavigationDrawerUndockedExample isOpen={true}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </TomisNavigationDrawerUndockedExample>
    );
  })
  .add('List - Nested Example', () => {
    return <TomisListNestedExample />;
  })
  .add('Menu - Simple Example', () => {
    return (
      <TomisMenuSimpleExample open={true}>
        <MenuItem>Maps</MenuItem>
        <MenuItem>Books</MenuItem>
        <MenuItem>Flights</MenuItem>
        <MenuItem>Apps</MenuItem>
      </TomisMenuSimpleExample>
    );
  })
  .add('Panel Example', () => {
    return <TomisPanelExample />;
  })
  .add('Progress Circular', () => {
    return <TomisProgressIndeterminateCircular />;
  })
  .add('Selection Controls - Checkbox', () => {
    return <TomisSelectionControlsCheckbox />;
  })
  .add('Table Example - Editable', () => {
    return <TomisTableEditableExample />;
  })
  .add('Table Example - Read-Only', () => {
    return <TomisTableReadOnlyExample />;
  })
  .add('Text Field ReadOnly - Pending', () => {
    return <TomisTextFieldReadOnly label="Read Only Label" placeholder="My Placeholder" required={true} value="My read-only val" />;
  })
  .add('Text Field Single-Line - Pending', () => {
    return <TomisTextFieldSingleLine label="My Singleline Label" placeholder="Singleline Placeholder" required={true} maxLength={10} isCloneable={true} />;
  })
  .add('Text Field Multi-Line - Pending', () => {
    return <TomisTextFieldMultiLine label="My Multiline Label" placeholder="Multiline Placeholder" rowsMax={10} isCloneable={true} />;
  })
  .add('Time Spinner', () => {
    return <TomisTimeSpinner isCloneable={true} />;
  })
  .add('Toggle Buttons', () => {
    return <TomisToggleButtonsExample disabled={false} />;
  });
