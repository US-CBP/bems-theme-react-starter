import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ComponentsExample from './muiExamples/cards/ComponentsExample';
import ExpandableExample from './muiExamples/cards/ExpandableExample';
import ControlledExample from './muiExamples/cards/ControlledExample';

const Cards = () => {
  return (
    <div>
      <h4>Card</h4>
      <Card>
        <CardHeader title="Card components example" />
        <CardText>
          <ComponentsExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Expandable example" />
        <CardText>
          <ExpandableExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Controlled example" />
        <CardText>
          <ControlledExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Cards;
