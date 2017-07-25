import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToolbarCbpHeader from '../BemsMui/ToolbarCbpHeader';
import ToolbarActionBar from '../BemsMui/ToolbarActionBar';

const propTypes = {
    actionBarPageTitle: PropTypes.string,
    handleStoryBookClick: PropTypes.func
};

class HeaderNavAction extends Component {
    render() {
        const { actionBarPageTitle, handleStoryBookClick } = this.props;
        return (
            <div onClick={handleStoryBookClick}>
                <ToolbarCbpHeader />
                <ToolbarActionBar pageTitle={actionBarPageTitle} />
            </div>
        );
    }
}
HeaderNavAction.propTypes = propTypes;
export default HeaderNavAction;
