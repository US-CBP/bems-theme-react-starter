export const operationStatusUasToggleButtonOptions = [
  { label: 'Pending', value: 'PENDING' },
  { label: 'Accept', value: 'ACCEPT' },
  { label: 'Reject', value: 'REJECT' }
];

export const toggleButtonsYesNoOptions = [{ label: 'Yes', value: 'YES' }, { label: 'No', value: 'NO' }];

export const setStateUasStatus = (flightStatus, state, props) => {
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

export const setStateIsSaved = (isSaved, state, props) => {
  return { isSaved };
};

export const riskAssessmentLovValues = ['LOW', 'MEDIUM', 'HIGH'];
