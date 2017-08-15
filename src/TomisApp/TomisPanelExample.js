import React from 'react';
import PropTypes from 'prop-types';
import { TomisPanel, TomisPanelBody } from './TomisPanel';
import TomisButtonRaised from './TomisButtonRaised';
import TableExample from 'TheWorks/TableExample';

const TomisPanelExample = ({ label, ...other }) => {
    return (
        <div>
            <TomisPanel label={label || 'My Panel Title'}>
                <a href="https://www.google.com" className="panel-link">
                    Search Google
                </a>
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-1">Panel Body can contain any and all components you desire.</div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">Panel Body can contain any and all components you desire.</div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">Panel Body can contain any and all components you desire.</div>
                    </div>
                    <div>
                        <h3>Panel with Table</h3>
                        <TableExample />
                    </div>
                </TomisPanelBody>
            </TomisPanel>
        </div>
    );
};

export default TomisPanelExample;
