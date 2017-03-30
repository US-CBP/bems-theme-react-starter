import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const DrawerNavigation = () => (
    <div>
    <List>
        <ListItem
          primaryText="Home"
        />
    </List>
    <Divider inset={false} />
    <List>
        <Subheader inset={false}>TOMIS Operations</Subheader>
          <ListItem primaryText="Add Flight" />
          <ListItem primaryText="Add Float" />
          <ListItem primaryText="Add UAS Consolidated" />
          <ListItem primaryText="Add UAS Federated" />
          <ListItem primaryText="Add Ground Operation" />
          <ListItem primaryText="Add No Launch" />
          <ListItem primaryText="Scheduler" />
          <ListItem primaryText="Sync Matrix" />
          <ListItem primaryText="Kiosk" />
          <ListItem primaryText="Current Missions" />
    </List>
    <Divider inset={false} />
    <List>
      <Subheader inset={false}>Events</Subheader>
      <ListItem primaryText="Add Event" />
    </List>
    <Divider inset={false} />
    <List>
      <Subheader inset={false}>Reports</Subheader>
      <ListItem primaryText="Retrieve Report" />
      <ListItem primaryText="AMO Dashboard Reports" />
    </List>
    <Divider inset={false} />
    <List>
      <Subheader inset={false}>TOMIS Maintenance</Subheader>
      <ListItem primaryText="Asset" />
      <ListItem primaryText="COA" />
      <ListItem primaryText="Named Operation" />
      <ListItem primaryText="Personnel" />
      <ListItem primaryText="Asset Allocation" />
    </List>
    <Divider inset={false} />
    <List>
      <Subheader inset={false}>Supervisor</Subheader>
      <ListItem primaryText="Approvals" />
    </List>
    <Divider inset={false} />
    <List>
      <Subheader inset={false}>Safety</Subheader>
      <ListItem primaryText="Safety Reports Status Page" />
    </List>
    <Divider inset={false} />
    <List>
      <Subheader inset={false}>Quick Search</Subheader>
      <ListItem primaryText="Mission Search" />
      <ListItem primaryText="Event Search" />
      <ListItem primaryText="Safety Search" />
    </List>
    </div>
);

export default DrawerNavigation;
