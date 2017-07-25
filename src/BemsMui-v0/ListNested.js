import React from 'react';
import ContainerEmpty from 'BemsMui/layouts/ContainerEmpty';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import FontIcon from 'BemsMui/FontIcon';

export default class ListsNested extends React.Component {
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
      <ContainerEmpty>
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
            <ListItem primaryText="Sent mail" leftIcon={<FontIcon name="send" />} />
            <ListItem primaryText="Drafts" leftIcon={<FontIcon name="drafts" />} />
            <ListItem
              primaryText="Inbox"
              leftIcon={<FontIcon name="inbox" />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem key={1} primaryText="Starred" leftIcon={<FontIcon name="grade" />} />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<FontIcon name="send" />}
                  disabled={true}
                  nestedItems={[<ListItem key={1} primaryText="Drafts" leftIcon={<FontIcon name="drafts" />} />]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<FontIcon name="inbox" />}
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[<ListItem key={1} primaryText="Drafts" leftIcon={<FontIcon name="drafts" />} />]}
                />
              ]}
            />
          </List>
        </div>
      </ContainerEmpty>
    );
  }
}
