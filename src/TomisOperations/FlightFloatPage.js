import PropTypes from 'prop-types';
import FlightFloatPageRender from './FlightFloatPageRender';
import compose from 'recompose/compose';
import setDefaultProps from 'recompose/defaultProps';
import setPropTypes from 'recompose/setPropTypes';
import withStateHandlers from 'recompose/withStateHandlers';

const stateHandlers = {
  handleChangeLocalZulu: ({ localZuluValue }) => (evt, localZuluValue) => ({
    localZuluValue
  }),
  handleChangeYesNo: ({ yesNoValue }) => (evt, yesNoValue) => ({
    yesNoValue
  })
};

const defaultProps = {};
const propTypes = {
  localZuluValue: PropTypes.string.isRequired
};

const props = {
  localZuluValue: '',
  yesNoValue: '',
  isInitAmo: '',
  isCloneable: true
};

export default compose(withStateHandlers(props, stateHandlers), setDefaultProps(defaultProps), setPropTypes(propTypes))(FlightFloatPageRender);
