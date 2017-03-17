import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';

storybook.setAddon(infoAddon);

setOptions({
    name: 'React Theming',
    url: 'https://github.com/sm-react/react-theming',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: false,
});

storybook.configure(
    () => {
        require('../src/stories');
        require('../src/ThemeSwitcher.story');
    //   require('../src/MaterialUI/index.story');
    // require('../src/CBPComponents/index.story');
        require('../src/AppBars/index.story');
        require('../src/AutoCompletes/index.story');
        require('../src/Avatars/index.story');
        require('../src/Badges/index.story');
        require('../src/BottomNavigations/index.story');
        require('../src/Buttons/index.story');
        require('../src/Cards/index.story');
        require('../src/Chips/index.story');
        require('../src/DatePickers/index.story');
        require('../src/Dialogs/index.story');
        require('../src/Dividers/index.story');
        require('../src/Drawers/index.story');
        require('../src/GridLists/index.story');
        require('../src/Icons/index.story');
        require('../src/Lists/index.story');
        require('../src/Menus/index.story');
        require('../src/Papers/index.story');
        require('../src/Popovers/index.story');
        require('../src/Progresses/index.story');
        require('../src/SelectFields/index.story');
        require('../src/Sliders/index.story');
        require('../src/Snackbars/index.story');
        require('../src/Steppers/index.story');
        require('../src/Subheaders/index.story');
        require('../src/Switches/index.story');
        require('../src/Tables/index.story');
        require('../src/Tabs/index.story');
        require('../src/TextFields/index.story');
        require('../src/TimePickers/index.story');
        require('../src/Toolbars/index.story');
    },
    module
);
