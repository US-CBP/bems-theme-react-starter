import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/tables/SimpleExample';
import ComplexExample from './muiExamples/tables/ComplexExample';

const Tables = () => {
  return (
    <div>
      <h4>Table</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Complex example" />
        <CardText>
          <ComplexExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Tables;
