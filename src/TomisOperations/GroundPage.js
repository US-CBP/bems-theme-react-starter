import GroundPageRender from './GroundPageRender';
import { compose, defaultProps as setDefaultProps, setPropTypes, withStateHandlers } from 'recompose';
import { stateHandlers } from 'app/storybookMock/stateHandlers';
import { propTypes, defaultProps, props } from 'app/storybookMock/props';

//Note, compose executes functions from right-to-left.  This is important to understand to avoid propTypes warnings.
const GroundPage = compose(withStateHandlers(props, stateHandlers), setDefaultProps(defaultProps), setPropTypes(propTypes))(GroundPageRender);
export default GroundPage;
