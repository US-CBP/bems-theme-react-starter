import FlightFloatPageRender from './FlightFloatPageRender';
import { compose, defaultProps as setDefaultProps, setPropTypes, withStateHandlers } from 'recompose';
import { stateHandlers } from 'app/storybookMock/stateHandlers';
import { propTypes, defaultProps, props } from 'app/storybookMock/props';

//Note, compose executes functions from right-to-left.  This is important to understand to avoid propTypes warnings.
const FlightFloatPage = compose(withStateHandlers(props, stateHandlers), setDefaultProps(defaultProps), setPropTypes(propTypes))(FlightFloatPageRender);
export default FlightFloatPage;
