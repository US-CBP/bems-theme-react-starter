/* eslint-disable import/no-extraneous-dependencies */
/* Keep all lines BEGIN */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../app/index.css';
/* Keep all lines END */
import RiskDecisionConsolidatedStory from './RiskDecisionConsolidatedStory';

const theme = getMuiTheme(tomisTheme);

storiesOf('RiskDecision - Consolidated', module)
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
  .add('UAS Consolidated Section', () => {
    const title = 'UAS Consolidated Planning';
    return <RiskDecisionConsolidatedStory actionBarPageTitle={title} />;
  });
