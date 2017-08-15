/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'TomisApp/helpers/palette';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import TomisContainer from 'TomisApp/layouts/TomisContainer';
import FormWithAllComponents from './FormWithAllComponents';
import StarterPage from './StarterPage';
import '../css/index.css';

const theme = createMuiTheme({ palette: createPalette(tomisTheme) });

storiesOf('TOMIS Template', module)
    .addDecorator(story => {
        const storyKind = story();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', minWidth: 600 }}>
                    <MuiThemeProvider theme={theme}>
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
