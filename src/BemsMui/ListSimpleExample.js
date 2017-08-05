import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListItemExpandable from './List/ListItemExpandable';
import FontIcon from './FontIcon';
import ButtonIcon from './ButtonIcon';

const ListSimpleExample = props =>
  <List>
    <ListItem button={true} divider={true}>
      <ListItemIcon>
        <FontIcon name="inbox" />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button={true} divider={true}>
      <ListItemIcon>
        <FontIcon name="drafts" />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
    <ListItemExpandable>
      <ListItemIcon>
        <FontIcon name="person" />
      </ListItemIcon>
      <ListItemText primary="Expandable?" secondary="Click it" />
      <List>
        <ListItem button={true} divider={true}>
          <ListItemIcon>
            <FontIcon name="content_copy" />
          </ListItemIcon>
          <ListItemText primary="Copy" />
        </ListItem>
        <ListItem button={true} divider={true}>
          <ListItemIcon>
            <FontIcon name="event_note" />
          </ListItemIcon>
          <ListItemText primary="Note" />
        </ListItem>
        <ListItemExpandable>
          <ListItemText primary="Level 2 Menu" />
          <List>
            <ListItem button={true} divider={true}>
              <ListItemIcon>
                <FontIcon name="android" />
              </ListItemIcon>
              <ListItemText primary="Android" />
            </ListItem>
            <ListItem button={true} divider={true}>
              <ListItemIcon>
                <FontIcon name="search" />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </List>
        </ListItemExpandable>
      </List>
    </ListItemExpandable>
  </List>;

export default ListSimpleExample;
