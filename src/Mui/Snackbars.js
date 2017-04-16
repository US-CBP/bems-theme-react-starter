import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/snackbars/SimpleExample';
import ActionExample from './muiExamples/snackbars/ActionExample';
import ConsecutiveExample from './muiExamples/snackbars/ConsecutiveExample';

const Snackbars = () => {
  return (
    <div>
      <h4>Snackbar</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Example action" />
        <CardText>
          <ActionExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Consecutive Snackbars" />
        <CardText>
          <ConsecutiveExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Snackbars;
