/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../app/index.css';
import RiskDecisionStory from './RiskDecisionStory';
import GroundRiskDecisionStory from './GroundRiskDecisionStory';

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
  .add('Flight Section', () => {
    const title = 'Flight Planning';
    return <RiskDecisionStory actionBarPageTitle={title} />;
  })
  .add('Float Section', () => {
    const title = 'Float Planning';
    return <RiskDecisionStory actionBarPageTitle={title} />;
  })
  .add('Ground Operation Section', () => {
    const title = 'Ground Operation';
    return <GroundRiskDecisionStory actionBarPageTitle={title} />;
  });
