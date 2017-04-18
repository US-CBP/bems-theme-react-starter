import React, { PropTypes, Component } from 'react';
import ToolbarCbpHeader from '../Tomis/ToolbarCbpHeader';
import ToolbarActionBar from '../Tomis/ToolbarActionBar';

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
