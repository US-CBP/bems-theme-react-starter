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
        <ListItemExpandable expandableChildIdx={2}>
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
            </List>
        </ListItemExpandable>
    </List>;

export default ListSimpleExample;
