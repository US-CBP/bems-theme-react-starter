import React from 'react';
import DotsMobileStepper from './DotsMobileStepper';
import ProgressMobileStepper from './ProgressMobileStepper';
import TextMobileStepper from './TextMobileStepper';

const DemoStepper = () => {
    return (
        <div>
            <br />
            <DotsMobileStepper />
            <br /> <br />
            <ProgressMobileStepper />
            <br /> <br />
            <TextMobileStepper />
        </div>
    );
};

export default DemoStepper;
