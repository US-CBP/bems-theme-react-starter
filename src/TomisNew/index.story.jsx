/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableEditable from './TableEditable';
import ToggleButtons from './ToggleButtons';
import FileAttachment from './FileAttachment';
import TimeSpinner from './TimeSpinner';
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
  .add('Table Editable - Pending', () => {
    return <TableEditable />;
  })
  .add('Toggle Buttons - Pending', () => {
    return <ToggleButtons />;
  })
  .add('File Attachment - Pending', () => {
    return <FileAttachment />;
  })
  .add('Time Spinner - Pending', () => {
    return <TimeSpinner />;
  });

function withNote(note, child) {
  return <WithNotes notes={note}>{child || null}</WithNotes>;
}
