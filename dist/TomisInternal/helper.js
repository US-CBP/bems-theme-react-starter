'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggleButtonsOptions = exports.toggleButtonsOptions = [{ label: 'Pending', value: 'PENDING' }, { label: 'Accept', value: 'ACCEPT' }, { label: 'Reject', value: 'REJECT' }];

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

var setStateIsConfirmVisible = exports.setStateIsConfirmVisible = function setStateIsConfirmVisible(isConfirmVisible, state, props) {
  return { isConfirmVisible: isConfirmVisible };
};