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
import RiskDecisionFederatedSection from './RiskDecisionFederatedSection.js';
// import RiskDecision_Federated_Pending from './RiskDecision_Federated_Pending.js';
import RiskDecision_Federated_Accept from './RiskDecision_Federated_Accept.js';
// import RiskDecision_Federated_AcceptSave from './RiskDecision_Federated_AcceptSave.js';
// import RiskDecision_Federated_Reject from './RiskDecision_Federated_Reject.js';

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
    return (
      <div>
        <HeaderNavAction actionBarPageTitle={title} />
        <RiskDecisionFederatedSection />
      </div>
    );
  })
  // .add('RiskDecision_Federated_Pending', () => {
  //   return <RiskDecision_Federated_Pending />;
  // })
  // .add('RiskDecision_Federated_AcceptSave', () => {
  //   return <RiskDecision_Federated_AcceptSave />;
  // })
  .add('RiskDecision_Federated_Accept', () => {
    return <RiskDecision_Federated_Accept />;
  });
// .add('RiskDecision_Federated_Reject', () => {
//   return <RiskDecision_Federated_Reject />;
// });
