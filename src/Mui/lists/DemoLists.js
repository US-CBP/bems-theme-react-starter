import React from 'react';
import CheckboxList from './CheckboxList';
import CheckboxListSecondary from './CheckboxListSecondary';
import FolderList from './FolderList';
import InsetList from './InsetList';
import InteractiveList from './InteractiveList';
import SimpleList from './SimpleList';
import SwitchListSecondary from './SwitchListSecondary';

const DemoLists = () => {
    return (
        <div>
            <br />
            <CheckboxList />
            <br /> <br />
            <CheckboxListSecondary />
            <br /> <br />
            <FolderList />
            <br /> <br />
            <InsetList />
            <br /> <br />
            <InteractiveList />
            <br /> <br />
            <SimpleList />
            <br /> <br />
            <SwitchListSecondary />
        </div>
    );
};

export default DemoLists;
