import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButtonSimpleExample from './muiExamples/buttons/raisedButton/SimpleExample';
import RaisedButtonComplexExample from './muiExamples/buttons/raisedButton/ComplexExample';
import RaisedButtonIconExample from './muiExamples/buttons/raisedButton/IconExample';
import FlatButtonSimpleExample from './muiExamples/buttons/flatButton/SimpleExample';
import FlatButtonComplexExample from './muiExamples/buttons/flatButton/ComplexExample';
import FlatButtonIconExample from './muiExamples/buttons/flatButton/IconExample';
import IconButtonSimpleExample from './muiExamples/buttons/iconButton/SimpleExample';
import IconButtonFurtherExample from './muiExamples/buttons/iconButton/FurtherExample';
import IconButtonSizeExample from './muiExamples/buttons/iconButton/SizeExample';
import IconButtonTooltipExample from './muiExamples/buttons/iconButton/TooltipExample';
import IconButtonTouchExample from './muiExamples/buttons/iconButton/TouchExample';
import FloatingActionButtonSimpleExample from './muiExamples/buttons/floatingActionButton/SimpleExample';

const Buttons = () => {
  return (
    <div>
      <h4>Raised Button</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <RaisedButtonSimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Complex examples" />
        <CardText>
          <RaisedButtonComplexExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Icon examples" />
        <CardText>
          <RaisedButtonIconExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Flat Button</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <FlatButtonSimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Complex examples" />
        <CardText>
          <FlatButtonComplexExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Icon examples" />
        <CardText>
          <FlatButtonIconExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Icon Button</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <IconButtonSimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Further examples" />
        <CardText>
          <IconButtonFurtherExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Size examples" />
        <CardText>
          <IconButtonSizeExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Tooltip examples" />
        <CardText>
          <IconButtonTooltipExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Touch example" />
        <CardText>
          <IconButtonTouchExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Floating Action Button</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <FloatingActionButtonSimpleExample />
        </CardText>
      </Card>

    </div>
  );
};
export default Buttons;
