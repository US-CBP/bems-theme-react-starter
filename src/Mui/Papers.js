import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/papers/SimpleExample';
import NonRoundedExample from './muiExamples/papers/NonRoundedExample';
import CircularExample from './muiExamples/papers/CircularExample';

const Papers = () => {
  return (
    <div>
      <h4>Paper</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Non-rounded cornders" />
        <CardText>
          <NonRoundedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Circular Paper" />
        <CardText>
          <CircularExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Papers;
