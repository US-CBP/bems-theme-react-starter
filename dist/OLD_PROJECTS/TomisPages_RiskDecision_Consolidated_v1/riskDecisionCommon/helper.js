'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var operationStatusUasToggleButtonOptions = exports.operationStatusUasToggleButtonOptions = [{ label: 'Pending', value: 'PENDING' }, { label: 'Accept', value: 'ACCEPT' }, { label: 'Reject', value: 'REJECT' }];

var toggleButtonsYesNoOptions = exports.toggleButtonsYesNoOptions = [{ label: 'Yes', value: 'YES' }, { label: 'No', value: 'NO' }];

var setStateUasStatus = exports.setStateUasStatus = function setStateUasStatus(flightStatus, state, props) {
  var newState = {
    flightStatus: flightStatus,
    isPending: false,
    isAccept: false,
    isReject: false
  };
  switch (flightStatus) {
    case 'PENDING':
      {
        newState.isPending = true;
        break;
      }
    case 'ACCEPT':
      {
        newState.isAccept = true;
        break;
      }
    case 'REJECT':
      {
        newState.isReject = true;
        break;
      }
  }

  return newState;
};

var setStateIsInfoVisible = exports.setStateIsInfoVisible = function setStateIsInfoVisible(isInfoVisible, state, props) {
  return { isInfoVisible: isInfoVisible };
};

var setStateIsConfirmVisible = exports.setStateIsConfirmVisible = function setStateIsConfirmVisible(isConfirmVisible, state, props) {
  return { isConfirmVisible: isConfirmVisible };
};

var setStateIsSaved = exports.setStateIsSaved = function setStateIsSaved(isSaved, state, props) {
  return { isSaved: isSaved };
};

var numberOfMissionsLovValues = exports.numberOfMissionsLovValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

var riskAssessmentLovValues = exports.riskAssessmentLovValues = ['LOW', 'MEDIUM', 'HIGH'];