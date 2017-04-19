import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FontIconCustomExample from './muiExamples/icons/fontIcon/CustomExample';
import FontIconPublicExample from './muiExamples/icons/fontIcon/PublicExample';
import SvgIconCustomExample from './muiExamples/icons/svgIcon/CustomExample';
import SvgIconMaterialExample from './muiExamples/icons/svgIcon/MaterialExample';

const Icons = () => {
  return (
    <div>
      <h4>SVG Icon</h4>
      <Card>
        <CardHeader title="Custom examples" />
        <CardText>
          <SvgIconCustomExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Material examples" />
        <CardText>
          <SvgIconMaterialExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Font Icon</h4>
      <Card>
        <CardHeader title="Custom example" />
        <CardText>
          <FontIconCustomExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Public example" />
        <CardText>
          <FontIconPublicExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Icons;
