/* eslint-disable import/no-extraneous-dependencies */
/* Keep all lines BEGIN */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import tomisTheme from '../app/themes/tomisLightTheme.js';
import '../app/index.css';
/* Keep all lines END */
import RiskDecisionConsolidatedSection from './RiskDecisionConsolidatedSection.js';
// import RiskDecision_Consolidated_Pending from './RiskDecision_Consolidated_Pending.js';
import RiskDecision_Consolidated_Accept from './RiskDecision_Consolidated_Accept.js';
// import RiskDecision_Consolidated_AcceptSave from './RiskDecision_Consolidated_AcceptSave.js';
// import RiskDecision_Consolidated_Reject from './RiskDecision_Consolidated_Reject.js';

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
    return <RiskDecisionConsolidatedSection />;
  })
  // .add('RiskDecision_Consolidated_Pending', () => {
  //   return <RiskDecision_Consolidated_Pending />;
  // })
  // .add('RiskDecision_Consolidated_AcceptSave', () => {
  //   return <RiskDecision_Consolidated_AcceptSave />;
  // })
  .add('RiskDecision_Consolidated_Accept', () => {
    return <RiskDecision_Consolidated_Accept />;
  });
// .add('RiskDecision_Consolidated_Reject', () => {
//   return <RiskDecision_Consolidated_Reject />;
// });
