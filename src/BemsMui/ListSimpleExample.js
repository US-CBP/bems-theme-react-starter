import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListItemExpandable from './List/ListItemExpandable';
import FontIcon from './FontIcon';
import ButtonIcon from './ButtonIcon';
import Divider from './Divider';

const ListSimpleExample = props =>
    <List>
        <ListItem button>
            <ListItemIcon>
                <FontIcon name="inbox" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemIcon>
                <FontIcon name="drafts" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
        <Divider />
        <ListItemExpandable>
            <ListItemText primary="Expandable?" secondary="Click it" />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <FontIcon name="inbox" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider inset={true} />
                <ListItem button>
                    <ListItemIcon>
                        <FontIcon name="drafts" />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
        </ListItemExpandable>
    </List>;

export default ListSimpleExample;
