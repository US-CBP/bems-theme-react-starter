/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { WithNotes } from '@storybook/addon-notes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import TomisContainer from 'TomisApp/layouts/TomisContainer';
import FormWithAllComponents from './FormWithAllComponents';
import StarterPage from './StarterPage';

const theme = getMuiTheme(tomisTheme);

storiesOf('TOMIS Template', module)
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
    .add('Form with All Components', () => {
        return (
            <TomisContainer type="FORM_WITH_ALL" title="Form With All">
                <FormWithAllComponents />
            </TomisContainer>
        );
    })
    .add('Starter Page', () => {
        return (
            <TomisContainer type="STARTER" title="Starter Page">
                <StarterPage />
            </TomisContainer>
        );
    });

function withNote(note, child) {
    return (
        <WithNotes notes={note}>
            {child || null}
        </WithNotes>
    );
}
