import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FormExample from './muiExamples/dividers/FormExample';
import InsetExample from './muiExamples/dividers/InsetExample';
import MenuExample from './muiExamples/dividers/MenuExample';

const Dividers = () => {
  return (
    <div>
      <h4>Divider</h4>
      <Card>
        <CardHeader title="Form divider" />
        <CardText>
          <FormExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Inset divider" />
        <CardText>
          <InsetExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Menu divider" />
        <CardText>
          <MenuExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Dividers;
