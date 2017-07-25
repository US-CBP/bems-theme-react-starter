import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/tabs/SimpleExample';
import ControlledExample from './muiExamples/tabs/ControlledExample';
import SwipeableExample from './muiExamples/tabs/SwipeableExample';
import IconExample from './muiExamples/tabs/IconExample';
import IconTextExample from './muiExamples/tabs/IconTextExample';

const Tabs = () => {
  return (
    <div>
      <h4>Tabs</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Controlled example" />
        <CardText>
          <ControlledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Swipeable example" />
        <CardText>
          <SwipeableExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Icon example" />
        <CardText>
          <IconExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Icon and text example" />
        <CardText>
          <IconTextExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Tabs;
