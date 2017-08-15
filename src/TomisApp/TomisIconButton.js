import React from 'react';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const TomisIconButton = ({ children, tooltip = 'Take Action', ...other }) => {
    return (
        <Tooltip
            placement="bottom"
            mouseEnterDelay={0.5}
            mouseLeaveDelay={0.1}
            destroyTooltipOnHide={true}
            align={{
                offset: [0, -10]
            }}
            overlay={
                <div>
                    {tooltip}
                </div>
            }
        >
            <IconButton {...other}>
                {children}
            </IconButton>
        </Tooltip>
    );
};

export default TomisIconButton;
