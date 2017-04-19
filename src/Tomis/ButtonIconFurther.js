import React from 'react';
import ExampleContainer from './helper/ExampleContainer'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const IconButtonExampleComplex = () => (
  <ExampleContainer>
    <IconButton tooltip="Font Icon">
      <FontIcon className="muidocs-icon-action-home" />
    </IconButton>

    <IconButton tooltip="SVG Icon">
      <ActionHome />
    </IconButton>

    <IconButton iconClassName="material-icons" tooltip="Ligature">
      home
    </IconButton>
  </ExampleContainer>
);

export default IconButtonExampleComplex;
