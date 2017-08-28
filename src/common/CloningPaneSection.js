import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloningPaneSectionRender from 'common/CloningPaneSectionRender';

class CloningPaneSection extends Component {
    render() {
        return <CloningPaneSectionRender {...this.props} />;
    }
}

export default CloningPaneSection;
