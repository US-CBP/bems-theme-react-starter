import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/badges/SimpleExample';
import FurtherExample from './muiExamples/badges/FurtherExample';

const Badges = () => {
  return (
    <div>
      <h4>Badge</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Further examples" />
        <CardText>
          <FurtherExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Badges;
