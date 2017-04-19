import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MenuSimpleExample from './muiExamples/menus/menu/SimpleExample';
import MenuDisabledExample from './muiExamples/menus/menu/DisabledExample';
import MenuIconsExample from './muiExamples/menus/menu/IconsExample';
import MenuSecondaryTextExample from './muiExamples/menus/menu/SecondaryTextExample';
import MenuNestedExample from './muiExamples/menus/menu/NestedExample';
import IconMenuPositioningExample from './muiExamples/menus/iconMenu/PositioningExample';
import IconMenuControlledExample from './muiExamples/menus/iconMenu/ControlledExample';
import IconMenuScrollableExample from './muiExamples/menus/iconMenu/ScrollableExample';
import IconMenuNestedExample from './muiExamples/menus/iconMenu/NestedExample';
import DropdownMenuSimpleExample from './muiExamples/menus/dropdownMenu/SimpleExample';
import DropdownMenuOpenImmediateExample from './muiExamples/menus/dropdownMenu/OpenImmediateExample';
import DropdownMenuLongExample from './muiExamples/menus/dropdownMenu/LongExample';
import DropdownMenuLabelExample from './muiExamples/menus/dropdownMenu/LabelExample';

const Menus = () => {
  return (
    <div>
      <h4>Menu</h4>
      <Card>
        <CardHeader title="Simple examples" />
        <CardText>
          <MenuSimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Disabled items" />
        <CardText>
          <MenuDisabledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Icons" />
        <CardText>
          <MenuIconsExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Secondary text" />
        <CardText>
          <MenuSecondaryTextExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Nested menus" />
        <CardText>
          <MenuNestedExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Icon Menu</h4>
      <Card>
        <CardHeader title="Icon Menu positioning" />
        <CardText>
          <IconMenuPositioningExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Controlled Icon Menus" />
        <CardText>
          <IconMenuControlledExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Scrollable Icon Menu" />
        <CardText>
          <IconMenuScrollableExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Nested Icon Menus" />
        <CardText>
          <IconMenuNestedExample />
        </CardText>
      </Card>
      <br /><br />
      <h4>Drop Down Menu</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <DropdownMenuSimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Open Immediate example" />
        <CardText>
          <DropdownMenuOpenImmediateExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Long example" />
        <CardText>
          <DropdownMenuLongExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Label example" />
        <CardText>
          <DropdownMenuLabelExample />
        </CardText>
      </Card>
    </div>
  );
};
export default Menus;
