import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/datePickers/SimpleExample';
import InlineExample from './muiExamples/datePickers/InlineExample';
import RangedExample from './muiExamples/datePickers/RangedExample';
import ControlledExample from './muiExamples/datePickers/ControlledExample';
import DisabledExample from './muiExamples/datePickers/DisabledExample';
// import LocalisedExample from './muiExamples/datePickers/LocalisedExample';

const DatePickers = () => {
  return (
    <div>
      <h4>Date Picker</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Inline examples" />
        <CardText>
          <InlineExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Ranged example" />
        <CardText>
          <RangedExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Controlled example" />
        <CardText>
          <ControlledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Disabled dates example" />
        <CardText>
          <DisabledExample />
        </CardText>
      </Card>
      {/*<br /><br /><br />
      <Card>
        <CardHeader title="Localised example" />
        <CardText>
          <LocalisedExample />
        </CardText>
      </Card>*/}
    </div>
  );
};
export default DatePickers;
