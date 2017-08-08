import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/dialogs/SimpleExample';
import ModalExample from './muiExamples/dialogs/ModalExample';
import StyledExample from './muiExamples/dialogs/StyledExample';
import NestedExample from './muiExamples/dialogs/NestedExample';
import ScrollableExample from './muiExamples/dialogs/ScrollableExample';
import AlertExample from './muiExamples/dialogs/AlertExample';

const Dialogs = () => {
  return (
    <div>
      <h4>Dialog</h4>
      <Card>
        <CardHeader title="Simple dialog" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Modal dialog" />
        <CardText>
          <ModalExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Styled dialog" />
        <CardText>
          <StyledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Nested dialog" />
        <CardText>
          <NestedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Scrollable dialog" />
        <CardText>
          <ScrollableExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Alert dialog" />
        <CardText>
          <AlertExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Dialogs;
