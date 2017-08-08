import React from 'react';
import DirectionSnackbar from './DirectionSnackbar';
import FadeSnackbar from './FadeSnackbar';
import LongTextSnackbar from './LongTextSnackbar';
import PositionedSnackbar from './PositionedSnackbar';
import SimpleSnackbar from './SimpleSnackbar';

const DemoSnackbars = () => {
    return (
        <div>
            <br />
            <DirectionSnackbar />
            <br /> <br />
            <FadeSnackbar />
            <br /> <br />
            <LongTextSnackbar />
            <br /> <br />
            <PositionedSnackbar />
            <br /> <br />
            <SimpleSnackbar />
        </div>
    );
};

export default DemoSnackbars;
