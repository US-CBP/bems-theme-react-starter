import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import CheckboxSimpleExample from './muiExamples/switches/checkboxSwitch/SimpleExample';
import RadioButtonSimpleExample from './muiExamples/switches/radioButtonSwitch/SimpleExample';
import ToggleSimpleExample from './muiExamples/switches/toggleSwitch/SimpleExample';

const Switches = () => {
  return (
    <div>
      <h4>Checkbox</h4>
      <Card>
        <CardHeader title="Checkbox Examples" />
        <CardText>
          <CheckboxSimpleExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Radio Button</h4>
      <Card>
        <CardHeader title="Radio Button Examples" />
        <CardText>
          <RadioButtonSimpleExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Toggle</h4>
      <Card>
        <CardHeader title="Toggle Examples" />
        <CardText>
          <ToggleSimpleExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Switches;
