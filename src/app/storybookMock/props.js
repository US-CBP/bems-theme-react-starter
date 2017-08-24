import PropTypes from 'prop-types';

export const propTypes = {};
export const defaultProps = {};

const genericText = {
  payload: {
    value: false,
    isCloneChecked: true
  },
  isCloneable: false
};

const genericCb = {
  payload: {
    value: false,
    isCloneChecked: true
  },
  isCloneable: false
};

const genericLov = {
  payload: {
    value: false,
    isCloneChecked: true
  },
  isCloneable: false
};

const genericCloneable = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable
};

const genericCloneableDisabled = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable,
  disabledClone: true
};

const genericCloneableLov = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable
};

const genericCloneableLovDisabled = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable,
  disabledClone: true
};

const genericCloneableTimeSpinner = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable
};

const genericCloneableTimeSpinnerDisabled = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable,
  disabledClone: true
};

const genericCloneableDuration = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable
};

const genericCloneableDurationDisabled = {
  payload: {
    value: '',
    isCloneChecked: true
  },
  isCloneable,
  disabledClone: true
};

const isCloneable = true;
const defns = {
  genericText,
  genericCb,
  genericLov,
  genericCloneable,
  genericCloneableDisabled,
  genericCloneableLov,
  genericCloneableLovDisabled,
  genericCloneableDuration,
  genericCloneableDurationDisabled,
  genericCloneableTimeSpinner,
  genericCloneableTimeSpinnerDisabled,
  localZuluToggle: {
    payload: {
      value: '',
      isCloneChecked: false
    },
    isCloneable: false
  },
  yesNoToggle: {
    payload: {
      value: '',
      isCloneChecked: true
    },
    isCloneable
  },
  yesNoCloneableToggleDisabled: {
    payload: {
      value: '',
      isCloneChecked: true
    },
    isCloneable,
    disabledClone: true
  },
  branchUnitLov: {
    payload: {
      value: 'Buffalo Air Branch',
      isCloneChecked: true
    },
    isCloneable
  },
  aircraftTypeLov: {
    payload: {
      value: '',
      isCloneChecked: true
    },
    isCloneable,
    disabledClone: true
  },
  tailNumberLov: {
    payload: {
      value: '',
      isCloneChecked: true
    },
    isCloneable,
    disabledClone: true
  },
  picLov: {
    payload: {
      value: '',
      isCloneChecked: true
    },
    isCloneable,
    disabledClone: true
  },
  remarks: {
    payload: {
      value: ''
    },
    isCloneable
  },
  title: {
    payload: {
      value: ''
    },
    isCloneable
  },
  standbyCb: {
    payload: {
      value: false
    },
    isCloneable: false
  }
};

export const props = {
  isInitAmo: '',
  isCloneable: true,
  defns
};
