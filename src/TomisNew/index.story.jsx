/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToggleButtons from '../TomisMui/ToggleButtons';
import FileAttachment from '../TomisMui/FileAttachment';
import TimeSpinner from '../TomisMui/TimeSpinner';
import TextFieldSimple from '../TomisMui/TextFieldSimple';
import TextFieldReadOnly from '../TomisMui/TextFieldReadOnly';
import { WithNotes } from '@kadira/storybook-addon-notes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';

const theme = getMuiTheme(tomisTheme);

storiesOf('TOMIS New', module)
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
  })
  .add('TextFieldReadOnly - Pending', () => {
    return <TextFieldReadOnly floatingLabelText="My Read-only Label" value="TEST VALUE" />;
  });

function withNote(note, child) {
  return <WithNotes notes={note}>{child || null}</WithNotes>;
}
