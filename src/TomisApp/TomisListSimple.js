import React from 'react';
import { List } from 'material-ui/List';
import MobileTearSheet from './helpers/MobileTearSheet';

const ListExampleSimple = props => (
  <MobileTearSheet>
    <List>
      {props.children}
    </List>
  </MobileTearSheet>
);

export default ListExampleSimple;
