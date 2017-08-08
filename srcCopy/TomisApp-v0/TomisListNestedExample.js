import React from 'react';
import TomisContainerEmpty from 'TomisApp/layouts/TomisContainerEmpty';
import { List, ListItem } from 'material-ui/List';
import TomisFontIcon from 'TomisApp/TomisFontIcon';
import Toggle from 'material-ui/Toggle';
import Subheader from 'material-ui/Subheader';

export default class TomisListNestedExample extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle = item => {
    this.setState({
      open: item.state.open
    });
  };

  render() {
    return (
      <TomisContainerEmpty>
        <Toggle
          toggled={this.state.open}
          onToggle={this.handleToggle}
          labelPosition="right"
          label="This toggle controls the expanded state of the submenu item."
        />
        <br />
        <div>
          <List>
            <Subheader>Nested List Items</Subheader>
            <ListItem primaryText="Sent mail" leftIcon={<TomisFontIcon name="send" />} />
            <ListItem primaryText="Drafts" leftIcon={<TomisFontIcon name="drafts" />} />
            <ListItem
              primaryText="Inbox"
              leftIcon={<TomisFontIcon name="send" />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem key={1} primaryText="Starred" leftIcon={<TomisFontIcon name="grade" />} />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<TomisFontIcon name="send" />}
                  disabled={true}
                  nestedItems={[<ListItem key={1} primaryText="Drafts" leftIcon={<TomisFontIcon name="drafts" />} />]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<TomisFontIcon name="inbox" />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[<ListItem key={1} primaryText="Drafts" leftIcon={<TomisFontIcon name="drafts" />} />]}
                />
              ]}
            />
          </List>
        </div>
      </TomisContainerEmpty>
    );
  }
}
