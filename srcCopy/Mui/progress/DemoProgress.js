import React from 'react';
import CircularDeterminate from './CircularDeterminate';
import CircularFab from './CircularFab';
import CircularIndeterminate from './CircularIndeterminate';
import LinearBuffer from './LinearBuffer';
import LinearDeterminate from './LinearDeterminate';
import LinearIndeterminate from './LinearIndeterminate';
import LinearQuery from './LinearQuery';

const DemoProgress = () => {
    return (
        <div>
            <br />
            <CircularDeterminate />
            <br /> <br />
            <CircularFab />
            <br /> <br />
            <CircularIndeterminate />
            <br /> <br />
            <LinearBuffer />
            <br /> <br />
            <LinearDeterminate />
            <br /> <br />
            <LinearIndeterminate />
            <br /> <br />
            <LinearQuery />
        </div>
    );
};

export default DemoProgress;
