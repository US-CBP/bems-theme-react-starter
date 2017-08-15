import React, { Component } from 'react';
import { TomisPanel } from 'TomisApp/TomisPanel';

const TomisPanelTable = ({ children, ...other }) => {
    return (
        <TomisPanel isTable={true} {...other}>
            {children}
        </TomisPanel>
    );
};

export default TomisPanelTable;
