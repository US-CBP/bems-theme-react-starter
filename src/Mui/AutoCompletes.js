import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SimpleExample from './muiExamples/autoCompletes/SimpleExample';
import DataSourcesExample from './muiExamples/autoCompletes/DataSourcesExample';
import FiltersExample from './muiExamples/autoCompletes/FiltersExample';
import ControlledExample from './muiExamples/autoCompletes/ControlledExample';
import MenuPropsExample from './muiExamples/autoCompletes/MenuPropsExample';

const AutoCompletes = () => {
  return (
    <div>
      <h4>Auto Complete</h4>
      <Card>
        <CardHeader title="Simple example" />
        <CardText>
          <SimpleExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Data sources" />
        <CardText>
          <DataSourcesExample />
        </CardText>
      </Card>
      <br /><br /><br />
      <Card>
        <CardHeader title="Filters" />
        <CardText>
          <FiltersExample />
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
        <CardHeader title="MenuProps example" />
        <CardText>
          <MenuPropsExample />
        </CardText>
      </Card>
    </div>
  );
};
export default AutoCompletes;
