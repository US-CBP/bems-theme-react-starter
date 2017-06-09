import React from 'react';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';

const isRender = operationStatusVal => {
    if (operationStatusVal === 'CANCELED') {
        return true;
    } else {
        return false;
    }
};

const GroundCanceled = ({ operationStatusVal }) => {
    if (isRender(operationStatusVal)) {
        return (
            <div className="flex-1">
                <TextFieldSimple hintText="Hint Text" floatingLabelText="Reason*" />
            </div>
        );
    } else {
        return false;
    }
};
export default GroundCanceled;
