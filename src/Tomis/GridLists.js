import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/gridLists/SimpleExample';
import ComplexExample from './muiExamples/gridLists/ComplexExample';
import OneLineExample from './muiExamples/gridLists/OneLineExample';

const GridLists = () => {
  return (
    <div>
      <h4>Grid List</h4>
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
      <br /><br /><br />
      <Card>
        <CardHeader title="One line example" />
        <CardText>
          <OneLineExample />
        </CardText>
      </Card>
    </div>
  );
};
export default GridLists;
