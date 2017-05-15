/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from './AutoComplete';
import AutoCompleteInfo from './AutoCompleteInfo';
import ButtonRaisedSimplePrimary from './ButtonRaisedSimplePrimary';
import ButtonRaisedComplexPrimary from './ButtonRaisedComplexPrimary';
import ButtonIconFurther from './ButtonIconFurther';
import CardExpandable from './CardExpandable';
import DatePickerInlineLandscape from './DatePickerInlineLandscape';
import DialogModal from './DialogModal';
import DividerMenu from './DividerMenu';
import DrawerNavigation from './DrawerNavigation';
import MenuItem from 'material-ui/MenuItem';
import DrawerUndocked from './DrawerUndocked';
import IconSvgMaterial from './IconSvgMaterial';
import { ListItem } from 'material-ui/List';
import ListSimple from './ListSimple';
import ListNested from './ListNested';
import MenuSimple from './MenuSimple';
import PanelExample from '../TomisMui/PanelExample';
import Paper from '../TomisMui/Paper';
import PopoverSimple from './PopoverSimple';
import ProgressRefreshLoading from './ProgressRefreshLoading';
import SwitchCheckbox from './SwitchCheckbox';
import SnackbarSimple from './SnackbarSimple';
import TableReadOnly from './TableReadOnly';
import TableEditable from './TableEditable';
import TextFieldSimple from './TextFieldSimple';
import TextFieldSimpleDefaultValue from './TextFieldSimpleDefaultValue';
import ToolbarActionBar from './ToolbarActionBar';
import ToolbarCbpHeader from './ToolbarCbpHeader';
import { WithNotes } from '@kadira/storybook-addon-notes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

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
  .add('AutoComplete Info - Pending', () => {
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
    return (
      <DialogModal initOpen={true}>
        Only actions can close this dialog.
      </DialogModal>
    );
  })
  .add('Divider - Menu', () => {
    return <DividerMenu />;
  })
  .add('Drawer - Undocked', () => {
    return (
      <DrawerUndocked initOpen={true}>
        <MenuItem>Menu Item</MenuItem><MenuItem>Menu Item 2</MenuItem>
      </DrawerUndocked>
    );
  })
  .add('Drawer - Navigation - Pending', () => {
    return <DrawerNavigation />;
  })
  .add('Icon - SVG, Material', () => {
    return <IconSvgMaterial />;
  })
  .add('List - Simple Example', () => {
    return (
      <ListSimple>
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
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
  .add('Text Field - Pending', () => {
    return <TextFieldSimple />;
  })
  .add('Text Field, Default Value - Pending', () => {
    return <TextFieldSimpleDefaultValue />;
  })
  .add('Table - Read-Only Example', () => {
    return <TableReadOnly />;
  })
  .add('Table - Editable Example', () => {
    return <TableEditable />;
  })
  .add('Toolbar, Action Bar', () => {
    return <ToolbarActionBar />;
  })
  .add('Toolbar, CBP Header', () => {
    return <ToolbarCbpHeader />;
  });

function withNote(note, child) {
  return <WithNotes notes={note}>{child || null}</WithNotes>;
}
