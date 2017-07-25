import React from 'react';
import { List, ListItem } from 'material-ui/List';
import MobileTearSheet from './helpers/MobileTearSheet';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const TomisListSimpleExample = props =>
  <MobileTearSheet>
    <List>
      <ListItem primaryText="Inbox" leftIcon={<TomisFontIcon name="inbox" />} />
      <ListItem primaryText="Starred" leftIcon={<TomisFontIcon name="grade" />} />
      <ListItem primaryText="Sent mail" leftIcon={<TomisFontIcon name="send" />} />
      <ListItem primaryText="Drafts" leftIcon={<TomisFontIcon name="drafts" />} />
      <ListItem primaryText="Inbox" leftIcon={<TomisFontIcon name="inbox" />} />
    </List>
  </MobileTearSheet>;

export default TomisListSimpleExample;
