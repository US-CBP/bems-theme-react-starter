import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/popovers/SimpleExample';
import AnimationExample from './muiExamples/popovers/AnimationExample';
import AnchorExample from './muiExamples/popovers/AnchorExample';

const Popovers = () => {
  return (
    <div>
      <h4>Popover</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Animation" />
        <CardText>
          <AnimationExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Anchor playground" />
        <CardText>
          <AnchorExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Popovers;
