/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolbarActionBar from './ToolbarActionBar';
import AutoCompletes from './AutoCompletes';
import Buttons from './Buttons';
import Cards from './Cards';
import ToolbarCbpHeader from './ToolbarCbpHeader';
import DatePickers from './DatePickers';
import Dialogs from './Dialogs';
import Dividers from './Dividers';
import Drawers from './Drawers';
import Icons from './Icons';
import Lists from './Lists';
import ListsNested from './ListsNested';
import Menus from './Menus';
import NavigationDrawer from './NavigationDrawer';
import Popovers from './Popovers';
import Progresses from './Progresses';
import Switches from './Switches';
import Snackbars from './Snackbars';
import TableReadOnly from './TableReadOnly';
import Tables from './Tables';
import TableEditable from './TableEditable';
import TextFields from './TextFields';
import TimePickers from './TimePickers';
import ToggleButtons from './ToggleButtons';
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
  .add('AutoComplete', () => {
    return <AutoCompletes />;
  })
  .add('Buttons', () => {
    return <Buttons />;
  })
  .add('Cards', () => {
    return <Cards />;
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
  .add('Popover', () => {
    return <Popovers />;
  })
  .add('Progress', () => {
    return <Progresses />;
  })
  .add('Switches / Checkbox', () => {
    return <Switches />;
  })
  .add('Snackbar', () => {
    return <Snackbars />;
  })
  .add('Text Field - Pending', () => {
    return <TextFields />;
  })
  .add('Time Picker', () => {
    return <TimePickers />;
  })
  .add('Table', () => {
    return <Tables />;
  })
  .add('Table, Editable', () => {
    return <TableEditable />;
  })
  .add('Toggle Buttons - Pending', () => {
    return <ToggleButtons />;
  })
  .add('Toolbar, Action Bar - Pending', () => {
    return <ToolbarActionBar />;
  })
  .add('Toolbar, CBP Header - Pending', () => {
    return <ToolbarCbpHeader />;
  });

function withNote(note, child) {
  return <WithNotes notes={note}>{child || null}</WithNotes>;
}
