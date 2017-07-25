import React from 'react';
import BasicTabs from './BasicTabs';
import BasicTabsWrappedLabel from './BasicTabsWrappedLabel';
import CenteredTabs from './CenteredTabs';
import DisabledTabs from './DisabledTabs';
import FullWidthTabs from './FullWidthTabs';
import IconLabelTabs from './IconLabelTabs';
import IconTabs from './IconTabs';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';
import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';
import ScrollableTabsButtonPrevent from './ScrollableTabsButtonPrevent';

const DemoTabs = () => {
    return (
        <div>
            <br />
            <BasicTabs />
            <br /> <br />
            <BasicTabsWrappedLabel />
            <br /> <br />
            <CenteredTabs />
            <br /> <br />
            <DisabledTabs />
            <br /> <br />
            <FullWidthTabs />
            <br /> <br />
            <IconLabelTabs />
            <br /> <br />
            <IconTabs />
            <br /> <br />
            <ScrollableTabsButtonAuto />
            <br /> <br />
            <ScrollableTabsButtonForce />
            <br /> <br />
            <ScrollableTabsButtonPrevent />
        </div>
    );
};

export default DemoTabs;
