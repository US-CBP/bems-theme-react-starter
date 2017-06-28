'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggleButtonsOptions = exports.toggleButtonsOptions = [{ label: 'Pending', value: 'PENDING' }, { label: 'Accept', value: 'ACCEPT' }, { label: 'Reject', value: 'REJECT' }];

var toggleButtonsYesNoOptions = exports.toggleButtonsYesNoOptions = [{ label: 'Yes', value: 'YES' }, { label: 'No', value: 'NO' }];

var setStateFlightStatus = exports.setStateFlightStatus = function setStateFlightStatus(flightStatus, state, props) {
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