/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RiskDecisionPage from './RiskDecisionPage';
import RiskDecisionAcceptPage from './RiskDecisionAcceptPage';
import RiskDecisionRejectPage from './RiskDecisionRejectPage';
import FormWithAllComponents from './FormWithAllComponents';
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
  .add('Form with All Components', () => {
    return <FormWithAllComponents />;
  })
  .add('Risk Decision', () => {
    return <RiskDecisionPage />;
  })
  .add('Risk Decision - Accept', () => {
    return <RiskDecisionAcceptPage />;
  })
  .add('Risk Decision - Reject', () => {
    return <RiskDecisionRejectPage />;
  });
