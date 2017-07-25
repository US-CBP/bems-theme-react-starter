import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToolbarCbpHeader from 'TomisApp/TomisToolbarCbpHeader';
import ToolbarActionBar from 'TomisApp/TomisToolbarActionBar';

const propTypes = {
    actionBarPageTitle: PropTypes.string,
    handleStoryBookClick: PropTypes.func
};

class TomisHeaderNavAction extends Component {
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
TomisHeaderNavAction.propTypes = propTypes;
export default TomisHeaderNavAction;
