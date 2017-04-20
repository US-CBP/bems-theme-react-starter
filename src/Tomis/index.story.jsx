/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from './AutoComplete';
import ButtonRaisedSimplePrimary from './ButtonRaisedSimplePrimary';
import ButtonRaisedComplexPrimary from './ButtonRaisedComplexPrimary';
import ButtonIconFurther from './ButtonIconFurther';
import CardExpandable from './CardExpandable';
import DatePickerInlineLandscape from './DatePickerInlineLandscape';
import DialogModal from './DialogModal';
import DividerMenu from './DividerMenu';
import DrawerNavigation from './DrawerNavigation';
import IconSvgMaterial from './IconSvgMaterial';
import ListSimple from './ListSimple';
import ListNested from './ListNested';
import MenuSimple from './MenuSimple';
import PopoverSimple from './PopoverSimple';
import ProgressRefreshLoading from './ProgressRefreshLoading';
import SwitchCheckbox from './SwitchCheckbox';
import SnackbarSimple from './SnackbarSimple';
import TableReadOnly from './TableReadOnly';
import TextFieldSimple from './TextFieldSimple';
import TextFieldSimpleDefaultValue from './TextFieldSimpleDefaultValue';
import ToolbarActionBar from './ToolbarActionBar';
import ToolbarCbpHeader from './ToolbarCbpHeader';
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
    return <AutoComplete />;
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
    return <DialogModal />;
  })
  .add('Divider - Menu', () => {
    return <DividerMenu />;
  })
  .add('Drawer - Navigation - Pending', () => {
    return <DrawerNavigation />;
  })
  .add('Icon - SVG, Material', () => {
    return <IconSvgMaterial />;
  })
  .add('List - Simple', () => {
    return <ListSimple />;
  })
  .add('List - Nested', () => {
    return <ListNested />;
  })
  .add('Menu - Simple', () => {
    return <MenuSimple />;
  })
  .add('Popover - Simple', () => {
    return <PopoverSimple />;
  })
  .add('Progress - Refresh, Loading', () => {
    return <ProgressRefreshLoading />;
  })
  .add('Switch - Checkbox', () => {
    return <SwitchCheckbox />;
  })
  .add('Snackbar - Simple', () => {
    return <SnackbarSimple />;
  })
  .add('Text Field - Pending', () => {
    return <TextFieldSimple />;
  })
  .add('Text Field, Default Value - Pending', () => {
    return <TextFieldSimpleDefaultValue />;
  })
  .add('Table - Read-Only', () => {
    return <TableReadOnly />;
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
