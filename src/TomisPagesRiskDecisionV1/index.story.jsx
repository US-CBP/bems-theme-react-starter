/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RiskDecisionPage from './RiskDecisionPage';
import RiskDecisionAcceptSavePage from './RiskDecisionAcceptSavePage';
import RiskDecisionAcceptPage from './RiskDecisionAcceptPage';
import RiskDecisionRejectPage from './RiskDecisionRejectPage';
import GroundRiskDecision from './GroundRiskDecision';
import GroundRiskDecisionCancelPage from './GroundRiskDecisionCancelPage';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../app/index.css';

const theme = getMuiTheme(tomisTheme);

storiesOf('Risk Decision - Flight/Float/Ground', module)
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
  .add('Risk Decision', () => {
    return <RiskDecisionPage />;
  })
  .add('Risk Decision - Accept - Save Needed', () => {
    return <RiskDecisionAcceptSavePage />;
  })
  .add('Risk Decision - Accept', () => {
    return <RiskDecisionAcceptPage />;
  })
  .add('Risk Decision - Reject', () => {
    return <RiskDecisionRejectPage />;
  })
  .add('Ground Operation', () => {
    return <GroundRiskDecision />;
  })
  .add('Ground Operation - Cancel', () => {
    return <GroundRiskDecisionCancelPage />;
  });
