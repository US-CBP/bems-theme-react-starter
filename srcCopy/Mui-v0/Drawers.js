import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import DockedExample from './muiExamples/drawers/DockedExample';
import UndockedExample from './muiExamples/drawers/UndockedExample';
import OpenSecondaryExample from './muiExamples/drawers/OpenSecondaryExample';

const Drawers = () => {
  return (
    <div>
      <h4>Drawer</h4>
      <Card>
        <CardHeader title="Docked example" />
        <CardText>
          <DockedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Undocked example" />
        <CardText>
          <UndockedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Open secondary example" />
        <CardText>
          <OpenSecondaryExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Drawers;
