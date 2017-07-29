import styled from 'styled-components';
import FontIcon from './FontIcon';
import { withTheme } from 'material-ui/styles';

// <CloneableIcon isCloneable={isCloneable} disabledClone={disabledClone} disabled={disabled} readOnly={readOnly} />

const CloneableIcon = FontIcon.extend`
  display: ${({ isCloneable }) => (isCloneable ? 'inline-block' : 'none')};
  color: ${({ disabledClone, disabled, theme }) => (disabledClone || disabled ? theme.action.disabled : theme.text.primary)};
  ::before {
    content: 'check_box';
  }
`;

export default withTheme(CloneableIcon);
