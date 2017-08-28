import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisCalendarCloning from 'common/TomisCalendarCloning';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBar from 'common/CloningStepBar';
import { CLONING_BUTTON_CONTAINER_H } from 'globalJs/constants';

class CloningPaneSectionRender extends Component {
    render() {
        const { dimensions, dimensions: { top, left, width } } = this.props;
        return (
            <div style={{ position: 'relative', textAlign: 'center' }}>
                <TomisCalendarCloning dimensions={dimensions} />
                <div
                    style={{
                        position: 'fixed',
                        top: `${window.innerHeight - CLONING_BUTTON_CONTAINER_H}px`,
                        left: `${left}px`,
                        backgroundColor: '#ffffff',
                        height: `${CLONING_BUTTON_CONTAINER_H}px`
                    }}
                >
                    <CloningStepBar stepNbr={3} dimensions={dimensions} style={{ position: 'static' }} />
                    <div style={{ marginTop: '1rem' }}>
                        <TomisButtonRaised label="Clone to Selected Dates" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CloningPaneSectionRender;
