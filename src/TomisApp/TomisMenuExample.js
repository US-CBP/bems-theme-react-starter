import React from 'react';
import Paper from 'BemsMui/Paper';
import TomisMenu from 'TomisApp/TomisMenu';
import TomisMenuItem from 'TomisApp/TomisMenuItem';

const TomisMenuSimpleExample = props =>
    <Paper>
        <TomisMenu>
            <TomisMenuItem primaryText="Maps" />
            <TomisMenuItem primaryText="Books" />
            <TomisMenuItem primaryText="Flights" />
            <TomisMenuItem primaryText="Apps" />
        </TomisMenu>
    </Paper>;

export default TomisMenuSimpleExample;
