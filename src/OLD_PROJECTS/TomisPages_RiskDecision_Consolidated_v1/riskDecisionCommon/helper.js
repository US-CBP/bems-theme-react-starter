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

export const numberOfMissionsLovValues = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30'
];

export const riskAssessmentLovValues = ['LOW', 'MEDIUM', 'HIGH'];
