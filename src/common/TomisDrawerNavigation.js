import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisIconButton from 'TomisApp/TomisIconButton';
import TomisSearch from 'common/TomisSearch';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import TomisListItemExpandable from 'TomisApp/List/TomisListItemExpandable';
import Drawer from 'material-ui/Drawer';
import { headerNavActionStyles } from '../app/helpers/styles';
import withStyles from 'material-ui/styles/withStyles';
import cx from 'classnames';

class TomisDrawerNavigation extends Component {
    render() {
        const { handleTouchTapButton, handleRequestCloseButton } = this;
        const {
            onRequestClose,
            isOpen,
            classes: {
                text: clsText,
                textHeader: clsTextHeader,
                toolbar: clsToolbar,
                headerBar: clsHeaderBar,
                drawer: clsDrawer,
                drawerList: clsDrawerList,
                listItemFirst: clsListItemFirst
            }
        } = this.props;
        return (
            <Drawer className={cx(clsDrawer)} open={isOpen} onRequestClose={onRequestClose}>
                <Toolbar className={cx(clsToolbar, clsHeaderBar)}>
                    <div className={cx(clsText, clsTextHeader)}>
                        <span>TOMIS</span>
                    </div>
                </Toolbar>
                <List className={cx(clsDrawerList)}>
                    <ListItem className={cx(clsListItemFirst)} button={false} divider={true}>
                        <TomisIconButton>
                            <TomisFontIcon name="search" />
                        </TomisIconButton>
                        <TomisSearch {...this.props} />
                    </ListItem>
                    {/*<TomisListItemExpandable>
                        <ListItemText key="SEARCH" primary="Search" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="SEARCH_1" primary="Search 1" />
                            </ListItem>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="SEARCH_2" primary="Search 2" />
                            </ListItem>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="SEARCH_3" primary="Search 3" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>*/}
                    <ListItem button={true} divider={true}>
                        <ListItemText key="HOME" primary="Home" />
                    </ListItem>
                    <TomisListItemExpandable>
                        <ListItemText key="OPS" primary="Ops" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="ADD_ITEM_1" primary="Add Item 1" />
                            </ListItem>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="ADD_ITEM_2" primary="Add Item 2" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>
                    <TomisListItemExpandable>
                        <ListItemText key="EVENTS" primary="Events" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="ADD_ITEM_3" primary="Add Item 3" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>
                    <TomisListItemExpandable>
                        <ListItemText key="REPORTS" primary="Reports" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="RETRIEVE_1" primary="Retrieve 1" />
                            </ListItem>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="RETRIEVE_2" primary="Retrieve 2" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>
                    <TomisListItemExpandable>
                        <ListItemText key="MAINTENANCE" primary="Maintenance" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="MTC_1" primary="ABC" />
                            </ListItem>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="MTC_2" primary="COA" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>
                    <TomisListItemExpandable>
                        <ListItemText key="APPROVALS" primary="Approvals" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="APPROVALS_1" primary="Approvals 1" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>
                    <TomisListItemExpandable>
                        <ListItemText key="OPTIONS" primary="Option" />
                        <List>
                            <ListItem button={true} divider={true} onClick={onRequestClose}>
                                <ListItemText key="OPTION_1" primary="Reports Status Page" />
                            </ListItem>
                        </List>
                    </TomisListItemExpandable>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(headerNavActionStyles, { name: 'HeaderNavAction' })(TomisDrawerNavigation);
