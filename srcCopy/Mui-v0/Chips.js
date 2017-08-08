import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/chips/SimpleExample';
import ArrayExample from './muiExamples/chips/ArrayExample';

const Chips = () => {
  return (
    <div>
      <h4>Chip</h4>
      <Card>
        <CardHeader title="Example Chips" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Example array" />
        <CardText>
          <ArrayExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Chips;
