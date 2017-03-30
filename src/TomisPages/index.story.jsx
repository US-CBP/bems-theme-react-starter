/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UasConsolidatedPage from './UasConsolidatedPage';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';

const theme = getMuiTheme(tomisTheme);

storiesOf('TOMIS Pages', module)
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
    .add('UAS Consolidated Page', () => {
        return <UasConsolidatedPage />;
    });
