import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

const DividerExampleList = () => (
  <Paper zDepth={2}>
    <List>
      <ListItem insetChildren={true} primaryText="Janet Perkins Bennet" />
      <ListItem insetChildren={true} primaryText="Peter Carlsson" />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem insetChildren={true} primaryText="Aaron Bennet" />
      <ListItem insetChildren={true} primaryText="Abbey Christensen" />
    </List>
  </Paper>
);

export default DividerExampleList;
