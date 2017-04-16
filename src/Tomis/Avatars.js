import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/avatars/SimpleExample';

const Avatar = () => {
  return (
    <div>
      <h4>Avatar</h4>
      <Card>
        <CardHeader title="Examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Avatar;
