/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import muiTheme from 'app/themes/muiLightTheme.js';
import DemoAppBar from './app-bar/DemoAppBar';
import DemoAutocomplete from './autocomplete/DemoAutocomplete';
import DemoAvatars from './avatars/DemoAvatars';
import DemoBadges from './badges/DemoBadges';
import DemoBottomNavigation from './bottom-navigation/DemoBottomNavigation';
import DemoButtons from './buttons/DemoButtons';
import DemoCards from './cards/DemoCards';
import DemoChips from './chips/DemoChips';
import DemoDialogs from './dialogs/DemoDialogs';
import DemoDividers from './dividers/DemoDividers';
import DemoDrawers from './drawers/DemoDrawers';
import DemoLists from './lists/DemoLists';
import DemoMenus from './menus/DemoMenus';
import DemoPaper from './paper/DemoPaper';
import DemoProgress from './progress/DemoProgress';
import DemoSelectionControls from './selection-controls/DemoSelectionControls';
import DemoSnackbars from './snackbars/DemoSnackbars';
import DemoStepper from './stepper/DemoStepper';
import DemoTables from './tables/DemoTables';
import DemoTabs from './tabs/DemoTabs';
import DemoTextFields from './text-fields/DemoTextFields';

const theme = createMuiTheme(createPalette(muiTheme));

storiesOf('MUI', module)
    .addDecorator(story => {
        const storyKind = story();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '60%', maxWidth: 1000, minWidth: 600 }}>
                    <MuiThemeProvider theme={theme}>
                        {storyKind}
                    </MuiThemeProvider>
                </div>
            </div>
        );
    })
    .add('App Bar', () => {
        return <DemoAppBar />;
    })
    .add('Autocomplete', () => {
        return <DemoAutocomplete />;
    })
    .add('Avatars', () => {
        return <DemoAvatars />;
    })
    .add('Badges', () => {
        return <DemoBadges />;
    })
    .add('Bottom Navigation', () => {
        return <DemoBottomNavigation />;
    })
    .add('Buttons', () => {
        return <DemoButtons />;
    })
    .add('Cards', () => {
        return <DemoCards />;
    })
    .add('Chips', () => {
        return <DemoChips />;
    })
    .add('Dialogs', () => {
        return <DemoDialogs />;
    })
    .add('Dividers', () => {
        return <DemoDividers />;
    })
    .add('Drawers', () => {
        return <DemoDrawers />;
    })
    .add('Lists', () => {
        return <DemoLists />;
    })
    .add('Menus', () => {
        return <DemoMenus />;
    })
    .add('Paper', () => {
        return <DemoPaper />;
    })
    .add('Progress', () => {
        return <DemoProgress />;
    })
    .add('Selection Controls', () => {
        return <DemoSelectionControls />;
    })
    .add('Snackbars', () => {
        return <DemoSnackbars />;
    })
    .add('Stepper', () => {
        return <DemoStepper />;
    })
    .add('Tables', () => {
        return <DemoTables />;
    })
    .add('Tabs', () => {
        return <DemoTabs />;
    })
    .add('Text Fields', () => {
        return <DemoTextFields />;
    });
