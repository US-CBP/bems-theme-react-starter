import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/sliders/SimpleExample';
import DisabledExample from './muiExamples/sliders/DisabledExample';
import SteppedExample from './muiExamples/sliders/SteppedExample';
import ControlledExample from './muiExamples/sliders/ControlledExample';
import AlternativeAxisExample from './muiExamples/sliders/AlternativeAxisExample';

const Sliders = () => {
  return (
    <div>
      <h4>Slider</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Disabled examples" />
        <CardText>
          <DisabledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Stepped example" />
        <CardText>
          <SteppedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Controlled Examples" />
        <CardText>
          <ControlledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Alternative Axis Examples" />
        <CardText>
          <AlternativeAxisExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Sliders;
