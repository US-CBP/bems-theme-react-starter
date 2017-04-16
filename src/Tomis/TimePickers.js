import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/timePickers/SimpleExample';
import ControlledExample from './muiExamples/timePickers/ControlledExample';
import LocalisedExample from './muiExamples/timePickers/LocalisedExample';

const TimePickers = () => {
  return (
    <div>
      <h4>Time Picker</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Controlled examples" />
        <CardText>
          <ControlledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Localised example" />
        <CardText>
          <LocalisedExample />
        </CardText>
      </Card>
    </div>
  );
};
export default TimePickers;
