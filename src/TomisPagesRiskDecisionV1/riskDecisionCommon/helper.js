export const operationStatusFlightFloatToggleButtonOptions = [{ label: 'Pending', value: 'PENDING' }, { label: 'Accept', value: 'ACCEPT' }, { label: 'Reject', value: 'REJECT' }];
export const operationStatusGroundToggleButtonOptions = [
    { label: 'Pending', value: 'PENDING' },
    { label: 'Executed', value: 'EXECUTED' },
    { label: 'Canceled', value: 'CANCELED' }
];

export const setStateOperationStatus = (operationStatusVal, state, props) => {
    return {
        operationStatusVal
    };
};

export const setStateFlightStatus = (flightStatus, state, props) => {
    const newState = {
        flightStatus,
        isPending: false,
        isAccept: false,
        isReject: false
    };
    switch (flightStatus) {
        case 'PENDING': {
            newState.isPending = true;
            break;
        }
        case 'ACCEPT': {
            newState.isAccept = true;
            break;
        }
        case 'REJECT': {
            newState.isReject = true;
            break;
        }
    }

    return newState;
};

export const setStateIsInfoVisible = (isInfoVisible, state, props) => {
    return { isInfoVisible };
};

export const setStateIsConfirmVisible = (isConfirmVisible, state, props) => {
    return { isConfirmVisible };
};
