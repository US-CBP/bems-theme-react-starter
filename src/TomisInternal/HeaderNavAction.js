import React, { PropTypes, Component } from 'react';
import CbpHeaderToolbar from '../Tomis/CbpHeaderToolbar';
import ActionBarToolbar from '../Tomis/ActionBarToolbar';

const propTypes = {
  actionBarPageTitle: PropTypes.string
};

class HeaderNavAction extends Component {
  render() {
    const { actionBarPageTitle } = this.props;
    return (
      <div>
        <CbpHeaderToolbar />
        <ActionBarToolbar pageTitle={actionBarPageTitle} />
      </div>
    );
  }
}
HeaderNavAction.propTypes = propTypes;
export default HeaderNavAction;
