import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import FontIcon from './FontIcon';

const ListSimpleExample = props =>
    <List>
        <ListItem button>
            <ListItemIcon>
                <FontIcon name="inbox" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <FontIcon name="drafts" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
    </List>;

export default ListSimpleExample;
