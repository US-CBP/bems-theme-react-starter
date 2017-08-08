/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import InputField from './InputField';
import Test2 from './Test2';
import TomisContainerEmpty from 'TomisApp/layouts/TomisContainerEmpty';

const theme = getMuiTheme(tomisTheme);

storiesOf('The Works', module)
    .addDecorator(story => {
        const storyKind = story();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', minWidth: 600, padding: '30px' }}>
                    <MuiThemeProvider muiTheme={theme}>
                        {storyKind}
                    </MuiThemeProvider>
                </div>
            </div>
        );
    })
    .add('Input Field', () => {
        return (
            <TomisContainerEmpty>
                <InputField />
            </TomisContainerEmpty>
        );
    })
    .add('Test2', () => {
        return <Test2 />;
    });
