import React from 'react';
import ContainerEmpty from 'BemsMui/layouts/ContainerEmpty';
import FontIcon from 'BemsMui/FontIcon';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24
};

const IconFontMaterial = () =>
  <ContainerEmpty>
    <FontIcon name="home" style={iconStyles} />
    <FontIcon name="flight_takeoff" style={iconStyles} color={red500} />
    <FontIcon name="cloud_download" style={iconStyles} color={yellow500} />
    <FontIcon name="videogame_asset" style={iconStyles} color={blue500} />
  </ContainerEmpty>;

export default IconFontMaterial;
