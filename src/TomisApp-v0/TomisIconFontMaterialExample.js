import React from 'react';
import TomisContainerEmpty from 'TomisApp/layouts/TomisContainerEmpty';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24
};

const TomisIconFontMaterialExample = () =>
  <TomisContainerEmpty>
    <TomisFontIcon name="home" style={iconStyles} />
    <TomisFontIcon name="flight_takeoff" style={iconStyles} color={red500} />
    <TomisFontIcon name="cloud_download" style={iconStyles} color={yellow500} />
    <TomisFontIcon name="videogame_asset" style={iconStyles} color={blue500} />
  </TomisContainerEmpty>;

export default TomisIconFontMaterialExample;
