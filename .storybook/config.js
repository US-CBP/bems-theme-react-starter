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
  require('../src/Tomis/index.story');
  require('../src/TomisInternal/index.story');
  require('../src/TomisNew/index.story');
  require('../src/TomisPages/index.story');
  require('../src/TomisPagesRiskDecisionV1/index.story');
  require('../src/TomisPagesRiskDecisionV4/index.story');
}, module);
