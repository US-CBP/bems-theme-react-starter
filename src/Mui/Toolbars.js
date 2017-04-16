import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/toolbars/SimpleExample';

const Toolbars = () => {
  return (
    <div>
      <h4>Toolbar</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Toolbars;
