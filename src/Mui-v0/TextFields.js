import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/textFields/SimpleExample';
import ErrorExample from './muiExamples/textFields/ErrorExample';
import StyledExample from './muiExamples/textFields/StyledExample';
import DisabledExample from './muiExamples/textFields/DisabledExample';
import ControlledExample from './muiExamples/textFields/ControlledExample';

const TextFields = () => {
  return (
    <div>
      <h4>Text Field</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Error examples" />
        <CardText>
          <ErrorExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Styled examples" />
        <CardText>
          <StyledExample />
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
        <CardHeader title="Controlled example" />
        <CardText>
          <ControlledExample />
        </CardText>
      </Card>
    </div>
  );
};
export default TextFields;
