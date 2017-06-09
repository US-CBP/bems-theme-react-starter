import React from 'react';

const isRender = operationStatusVal => {
    if (operationStatusVal === 'EXECUTED') {
        return true;
    } else {
        return false;
    }
};

const GroundExecuted = ({ operationStatusVal }) => {
    if (isRender(operationStatusVal)) {
        return (
            <div className="row-spacer-24">
                Execution May Begin
            </div>
        );
    } else {
        return false;
    }
};
export default GroundExecuted;
