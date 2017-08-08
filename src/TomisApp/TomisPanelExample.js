import React from 'react';
import PropTypes from 'prop-types';
import { TomisPanel } from './TomisPanel';

const TomisPanelExample = ({ ...props }) => {
    return (
        <div>
            <TomisPanel title="My Panel Title">
                <div>Action 1</div>
                <div>Action 2</div>
                <div>Body 1</div>
            </TomisPanel>
        </div>
    );
};

export default TomisPanelExample;
