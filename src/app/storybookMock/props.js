import PropTypes from 'prop-types';

export const propTypes = {};

export const defaultProps = {};

const defns = {
  localZulu: {
    payload: {
      value: '',
      isCloneChecked: true
    }
  },
  yesNo: {
    payload: {
      value: '',
      isCloneChecked: true
    }
  }
};

export const props = {
  localZuluValue: '',
  yesNoValue: '',
  isInitAmo: '',
  isCloneable: true,
  defns
};
