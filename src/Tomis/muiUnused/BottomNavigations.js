import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/bottomNavigations/SimpleExample';

const BottomNavigations = () => {
  return (
    <div>
      <h4>Bottom Navigation</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
    </div>
  );
};
export default BottomNavigations;
