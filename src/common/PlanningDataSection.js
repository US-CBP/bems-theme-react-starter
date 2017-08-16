import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanningDataSectionRender from 'common/PlanningDataSectionRender';

class PlanningDataSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <PlanningDataSectionRender {...this.props} />;
    }
}

export default PlanningDataSection;
