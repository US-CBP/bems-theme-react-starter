import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';

storybook.setAddon(infoAddon);

setOptions({
  name: 'CBP Theme React',
  url: 'https://github.com/US-CBP/cbp-theme-react-starter',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false
});

storybook.configure(() => {
  // require('../src/stories');
  // require('../src/ThemeSwitcher.story');
  require('../src/Mui/index.story');
  require('../src/TomisMui/index.story');
  require('../src/TomisInternal/index.story');
  require('../src/TomisNew/index.story');
  require('../src/TomisInternal/index.story');
  require('../src/TomisPagesPlanningFlightV1/index.story');
  require('../src/TomisPagesPlanningGroundV1/index.story');
  require('../src/TomisPagesRiskDecisionV1/index.story');
  require('../src/TomisPages_RiskDecision_Consolidated_v1/index.story');
  require('../src/TomisPages_RiskDecision_Federated_v1/index.story');
  require('../src/TomisPagesCloningV1/index.story');

}, module);
