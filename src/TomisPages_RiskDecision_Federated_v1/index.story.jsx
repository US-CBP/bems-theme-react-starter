/* eslint-disable import/no-extraneous-dependencies */
/* Keep all lines BEGIN */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderNavAction from '../TomisMui/HeaderNavAction';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../app/index.css';
/* Keep all lines END */
import RiskDecisionFederatedStory from './RiskDecisionFederatedStory';

const theme = getMuiTheme(tomisTheme);

storiesOf('RiskDecision - Federated', module)
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
  .add('UAS Federated Section', () => {
    const title = 'UAS Federated Planning';
    return <RiskDecisionFederatedStory actionBarPageTitle={title} />;
  });
