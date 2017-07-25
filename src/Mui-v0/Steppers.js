import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import HorizontalLinearExample from './muiExamples/steppers/HorizontalLinearExample';
import VerticalLinearExample from './muiExamples/steppers/VerticalLinearExample';
import HorizontalNonLinearExample from './muiExamples/steppers/HorizontalNonLinearExample';
import VerticalNonLinearExample from './muiExamples/steppers/VerticalNonLinearExample';
import GranularControlExample from './muiExamples/steppers/GranularControlExample';
import CustomIconExample from './muiExamples/steppers/CustomIconExample';
import HorizontalStepTransitionExample from './muiExamples/steppers/HorizontalStepTransitionExample';
import CustomStepConnectorExample from './muiExamples/steppers/CustomStepConnectorExample';

const Steppers = () => {
  return (
    <div>
      <h4>Stepper</h4>
      <Card>
        <CardHeader title="Horizontal linear stepper" />
        <CardText>
          <HorizontalLinearExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Vertical linear stepper" />
        <CardText>
          <VerticalLinearExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Horizontal non-linear stepper" />
        <CardText>
          <HorizontalNonLinearExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Vertical non-linear stepper" />
        <CardText>
          <VerticalNonLinearExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Granular control" />
        <CardText>
          <GranularControlExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Custom icon" />
        <CardText>
          <CustomIconExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Horizontal step transition example" />
        <CardText>
          <HorizontalStepTransitionExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Custom step connector" />
        <CardText>
          <CustomStepConnectorExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Steppers;
