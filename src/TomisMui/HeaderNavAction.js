import React, { PropTypes, Component } from 'react';
import ToolbarCbpHeader from '../TomisMui/ToolbarCbpHeader';
import ToolbarActionBar from '../TomisMui/ToolbarActionBar';

const propTypes = {
  actionBarPageTitle: PropTypes.string
};

class HeaderNavAction extends Component {
  render() {
    const { actionBarPageTitle } = this.props;
    return (
      <div>
        <ToolbarCbpHeader />
        <ToolbarActionBar pageTitle={actionBarPageTitle} />
      </div>
    );
  }
}
HeaderNavAction.propTypes = propTypes;
export default HeaderNavAction;
