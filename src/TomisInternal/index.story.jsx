/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderNavAction from './HeaderNavAction';
import { WithNotes } from '@kadira/storybook-addon-notes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';

const theme = getMuiTheme(tomisTheme);

storiesOf('TOMIS Internal', module)
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
    .add('Header, Nav, Action - Pending', () => {
        return <HeaderNavAction />;
    });

function withNote(note, child) {
    return <WithNotes notes={note}>{child || null}</WithNotes>;
}
