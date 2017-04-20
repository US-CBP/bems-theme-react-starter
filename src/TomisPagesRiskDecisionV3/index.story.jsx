/* eslint-disable import/no-extraneous-dependencies */
/* Keep all lines BEGIN */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../app/index.css';
/* Keep all lines END */

import RiskDecisionPage from './RiskDecisionPage';

const theme = getMuiTheme(tomisTheme);

/* Do not touch START */
storiesOf('TOMIS Pages - Risk Decision V3', module)
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
// Do not touch END
.add('Risk Decision', () => {
  return <RiskDecisionPage />;
  });
