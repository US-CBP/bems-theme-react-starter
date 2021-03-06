import styled from 'styled-components';
import { materialIconsXref } from 'globalJs/materialIconsXref';

const TomisFontIcon = styled.i.attrs({ 'data-sc': 'TomisFontIcon' })`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  color: ${({ color }) => color || 'inherit'};
  pointer-events: ${({ disabledClone, disabled }) => (disabledClone || disabled ? 'none' : 'auto')};
  ::before {
        content: '${props => materialIconsXref[props.name]}';
  }
`;

export default TomisFontIcon;
