import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisToolbarCbpHeader from 'common/TomisToolbarCbpHeader';
import TomisToolbarActionBar from 'common/TomisToolbarActionBar';

const propTypes = {
    actionBarPageTitle: PropTypes.string,
    handleStoryBookClick: PropTypes.func
};

class TomisHeaderNavAction extends Component {
    render() {
        const { actionBarPageTitle, handleStoryBookClick } = this.props;
        return (
            <div style={{ width: '100%' }} onClick={handleStoryBookClick}>
                <TomisToolbarCbpHeader />
                <TomisToolbarActionBar pageTitle={actionBarPageTitle} />
            </div>
        );
    }
}
TomisHeaderNavAction.propTypes = propTypes;
export default TomisHeaderNavAction;
