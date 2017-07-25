import React from 'react';
import ContainerEmpty from 'BemsMui/layouts/ContainerEmpty';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExpandable = () => (
  <ContainerEmpty>
    <Card>
      <CardHeader title="Without Avatar" subtitle="Subtitle" actAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </ContainerEmpty>
);

export default CardExpandable;
