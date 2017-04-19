import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/appBars/SimpleExample';
import ButtonsExample from './muiExamples/appBars/ButtonsExample';
import CompositionExample from './muiExamples/appBars/CompositionExample';

const AppBars = () => {
  return (
    <div>
      <h4>App Bar</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Buttons example" />
        <CardText>
          <ButtonsExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Composition example" />
        <CardText>
          <CompositionExample />
        </CardText>
      </Card>
    </div>
  );
};
export default AppBars;
