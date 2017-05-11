import React, { PropTypes, Component } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import Search from '../TomisInternal/Search';
import SearchIcon from 'react-material-icons/icons/action/search';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import { getDrawerSearchListStyle, getDrawerSearchListItemStyle } from '../app/helpers/styles';

const isInitiallyOpen = false;
const isPrimaryTogglesNestedList = true;

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static defaultProps = {
      defaultValue: 0
    };
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index
      });
    };

    render() {
      return (
        <ComposedComponent value={this.state.selectedIndex} onChange={this.handleRequestChange}>
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {},
      anchorEl: {}
    };
  }

  render() {
    const { handleTouchTapButton, handleRequestCloseButton } = this;
    const { isOpen, anchorEl } = this.state;
    return (
      <div>
        <List style={getDrawerSearchListStyle()}>
          <ListItem innerDivStyle={getDrawerSearchListItemStyle()}>
            <AppBar iconElementLeft={<IconButton><SearchIcon /></IconButton>} title={<Search {...this.props} />} />
          </ListItem>
        </List>
        <Divider inset={false} />
        <SelectableList>
          <ListItem
            value={1}
            primaryText="Search"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[
              <ListItem value={2} primaryText="Search 1" key="SEARCH_1" />,
              <ListItem value={3} primaryText="Search 2" key="SEARCH_2" />,
              <ListItem value={4} primaryText="Search 3" key="SEARCH_3" />
            ]}
          />
          <Divider inset={false} />
          <ListItem value={5} primaryText="Home" />
          <Divider inset={false} />
          <ListItem
            value={6}
            primaryText="Ops"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[<ListItem value={7} primaryText="Add Item 1" key="ADD_ITEM_2" />, <ListItem value={8} primaryText="Add Item 2" key="ADD_ITEM_1" />]}
          />
        </SelectableList>
        <Divider inset={false} />
        <List>
          <ListItem
            value={17}
            primaryText="Events"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[<ListItem primaryText="Add Item 3" key="ADD_ITEM_3" />]}
          />
        </List>
        <Divider inset={false} />
        <List>
          <ListItem
            value={18}
            primaryText="Reports"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[<ListItem value={19} primaryText="Retrieve 1" key="RETRIEVE" />, <ListItem value={20} primaryText="Dashboard" key="DASHBOARD" />]}
          />
        </List>
        <Divider inset={false} />
        <List>
          <ListItem
            value={21}
            primaryText="Maintenance"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[<ListItem value={22} primaryText="Abc" key="ABC" />, <ListItem value={23} primaryText="COA" key="COA" />]}
          />
        </List>
        <Divider inset={false} />
        <List>
          <ListItem
            value={27}
            primaryText="Supervisor"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[<ListItem value={28} primaryText="Approvals" key="APPROVALS" />]}
          />
        </List>
        <Divider inset={false} />
        <List>
          <ListItem
            value={29}
            primaryText="Option"
            initiallyOpen={isInitiallyOpen}
            primaryTogglesNestedList={isPrimaryTogglesNestedList}
            nestedItems={[<ListItem value={30} primaryText="Reports Status Page" key="REPORTS_STATUS_PAGE" />]}
          />
        </List>
      </div>
    );
  }
}

export default muiThemeable()(NavigationDrawer);
