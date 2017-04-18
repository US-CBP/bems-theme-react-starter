import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/selectFields/SimpleExample';
import NullableExample from './muiExamples/selectFields/NullableExample';
import LongExample from './muiExamples/selectFields/LongExample';
import LabelExample from './muiExamples/selectFields/LabelExample';
import FloatingLabelExample from './muiExamples/selectFields/FloatingLabelExample';
import ErrorTextExample from './muiExamples/selectFields/ErrorTextExample';
import MultipleSelectionExample from './muiExamples/selectFields/MultipleSelectionExample';
import SelectionRendererExample from './muiExamples/selectFields/SelectionRendererExample';

const SelectFields = () => {
  return (
    <div>
      <h4>Select Field</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Nullable select" />
        <CardText>
          <NullableExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Long example" />
        <CardText>
          <LongExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Label example" />
        <CardText>
          <LabelExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Floating label example" />
        <CardText>
          <FloatingLabelExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="ErrorText example" />
        <CardText>
          <ErrorTextExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Multiple selection example" />
        <CardText>
          <MultipleSelectionExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Selection renderer example" />
        <CardText>
          <SelectionRendererExample />
        </CardText>
      </Card>
    </div>
  );
};
export default SelectFields;
