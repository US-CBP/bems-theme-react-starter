import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ListExample from './muiExamples/subheaders/ListExample';
import InsetExample from './muiExamples/subheaders/InsetExample';
import GridListExample from './muiExamples/subheaders/GridListExample';

const Subheaders = () => {
  return (
    <div>
      <h4>Subheader</h4>
      <Card>
        <CardHeader title="Simple Usage with List" />
        <CardText>
          <ListExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Inset Example" />
        <CardText>
          <InsetExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Simple Usage with GridList" />
        <CardText>
          <GridListExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Subheaders;
