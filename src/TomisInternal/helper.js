export const toggleButtonsOptions = [{ label: 'Pending', value: 'PENDING' }, { label: 'Accept', value: 'ACCEPT' }, { label: 'Reject', value: 'REJECT' }];

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

export const setStateIsConfirmVisible = (isConfirmVisible, state, props) => {
  return { isConfirmVisible };
};