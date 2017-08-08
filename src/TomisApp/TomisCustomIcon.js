import styled from 'styled-components';

const TomisCustomIcon = styled.i`
  font-family: 'nasadings';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 0.4;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  color: ${props => props.color || 'inherit'};
  ::before {
    content: '${props => props.name}';
  }
`;

export default TomisCustomIcon;
