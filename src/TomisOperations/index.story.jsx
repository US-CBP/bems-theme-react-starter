/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'TomisApp/helpers/palette';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import TomisContainerPaneRight from 'TomisApp/layouts/TomisContainerPaneRight';
import FlightFloatPage from './FlightFloatPage';
import GroundPage from './GroundPage';
import UasConsolidatedPage from './UasConsolidatedPage';
import UasFederatedPage from './UasFederatedPage';
import CloningPaneSection from 'common/CloningPaneSection';
import TomisTextFieldSingleLine from 'TomisApp/TomisTextFieldSingleLine';
import '../css/index.css';

const theme = createMuiTheme({ palette: createPalette(tomisTheme) });

storiesOf('TOMIS Operations', module)
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
    .add('Add Flight', () => {
        return (
            <TomisContainerPaneRight title="Add Flight">
                <FlightFloatPage />
                <CloningPaneSection />
            </TomisContainerPaneRight>
        );
    })
    .add('Add UAS Consolidated', () => {
        return (
            <TomisContainerPaneRight title="Add UAS Consolidated">
                <UasConsolidatedPage />
                <CloningPaneSection />
            </TomisContainerPaneRight>
        );
    })
    .add('Add UAS Federated', () => {
        return (
            <TomisContainerPaneRight title="Add UAS Federated">
                <UasFederatedPage />
                <CloningPaneSection />
            </TomisContainerPaneRight>
        );
    })
    .add('Add Ground', () => {
        return (
            <TomisContainerPaneRight title="Add Ground">
                <GroundPage />
                <CloningPaneSection />
            </TomisContainerPaneRight>
        );
    });
