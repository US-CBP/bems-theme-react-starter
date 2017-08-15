import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisCalendarCloning from 'common/TomisCalendarCloning';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBar from 'common/CloningStepBar';

class CloningPaneSectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dimensions } = this.props;
        return (
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <TomisCalendarCloning />
                <CloningStepBar stepNbr={3} style={{ position: 'static', width: `100%` }} />
                <div style={{ marginTop: '1rem' }}>
                    <TomisButtonRaised label="Clone to Selected Dates" />
                </div>
            </div>
        );
    }
}

export default CloningPaneSectionRender;
