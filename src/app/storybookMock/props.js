import PropTypes from 'prop-types';

export const propTypes = {};
export const defaultProps = {};

const defns = {
  localZuluToggle: {
    payload: {
      value: '',
      isCloneChecked: true
    }
  },
  yesNoToggle: {
    payload: {
      value: '',
      isCloneChecked: true
    }
  },
  branchUnitLov: {
    payload: {
      value: 'Buffalo Air Branch',
      isCloneChecked: true
    }
  },
  standbyCb: {
    payload: {
      value: false
    }
  }
};

export const props = {
  isInitAmo: '',
  isCloneable: true,
  defns
};
