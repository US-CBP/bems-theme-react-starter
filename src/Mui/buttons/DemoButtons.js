import React from 'react';
import FlatButtons from './FlatButtons';
import FloatingActionButtons from './FloatingActionButtons';
import IconButtons from './IconButtons';
import RaisedButtons from './RaisedButtons';

const DemoButtons = () => {
    return (
        <div>
            <br />
            <FlatButtons />
            <br /> <br />
            <FloatingActionButtons />
            <br /> <br />
            <IconButtons />
            <br /> <br />
            <RaisedButtons />
        </div>
    );
};

export default DemoButtons;
