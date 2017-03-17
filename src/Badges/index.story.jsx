/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { muiTheme } from 'storybook-addon-material-ui';

import AppBar from 'material-ui/AppBar';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

storiesOf('App Bars', module)
    .addDecorator((story) => {
        const storyKind = story();
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '60%', maxWidth: 1000, minWidth: 600 }} >
              {storyKind}
            </div>
          </div>);
    })
    .addDecorator(muiTheme(themesList))
    .add('Simple', () => {
        return <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    });
