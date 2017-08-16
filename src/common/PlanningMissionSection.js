import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanningMissionSectionRender from 'common/PlanningMissionSectionRender';

class PlanningMissionSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <PlanningMissionSectionRender {...this.props} />;
    }
}

export default PlanningMissionSection;
