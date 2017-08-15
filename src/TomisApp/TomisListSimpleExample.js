import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListItemExpandable from './List/ListItemExpandable';
import TomisFontIcon from './TomisFontIcon';

const TomisListSimpleExample = props =>
    <List>
        <ListItem button={true} divider={true}>
            <ListItemIcon>
                <TomisFontIcon name="inbox" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button={true} divider={true}>
            <ListItemIcon>
                <TomisFontIcon name="drafts" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button={true} divider={true}>
            <ListItemIcon>
                <TomisFontIcon name="content_copy" />
            </ListItemIcon>
            <ListItemText primary="Copy" />
        </ListItem>
        <ListItem button={true} divider={true}>
            <ListItemIcon>
                <TomisFontIcon name="event_note" />
            </ListItemIcon>
            <ListItemText primary="Note" />
        </ListItem>
    </List>;

export default TomisListSimpleExample;
