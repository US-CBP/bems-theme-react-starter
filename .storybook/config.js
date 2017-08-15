/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'BEMS Theme React',
    url: 'https://github.com/US-CBP/bems-theme-react-starter',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false,
    sortStoriesByKind: false
});

function loadStories() {
    require('../src/Mui/index.story');
    // require('../src/BemsMui/index.story');
    require('../src/TomisApp/index.story');
    require('../src/TomisOperations/index.story');
    require('../src/TomisTemplate/index.story');
    require('../src/TheWorks/index.story');
}

configure(loadStories, module);
