/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'TomisApp/helpers/palette';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';
import DatePicker from './DatePicker';
import FileAttachment from './FileAttachment';
import Panel from './Panel';
import Table from './Table';
import '../css/index.css';

const theme = createMuiTheme({ palette: createPalette(tomisTheme) });

storiesOf('The Works', module)
    .addDecorator(story => {
        const storyKind = story();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', minWidth: 600, padding: '30px' }}>
                    <MuiThemeProvider theme={theme}>
                        {storyKind}
                    </MuiThemeProvider>
                </div>
            </div>
        );
    })
    .add('Panel', () => {
        return <Panel />;
    })
    .add('Input Field', () => {
        return <InputField />;
    })
    .add('Select Field', () => {
        return <SelectField />;
    })
    .add('Date Picker', () => {
        return <DatePicker />;
    })
    .add('Text Area', () => {
        return <TextArea />;
    })
    .add('Table', () => {
        return <Table />;
    })
    .add('File Attachment', () => {
        return <FileAttachment />;
    });
