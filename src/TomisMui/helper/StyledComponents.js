import styled from 'styled-components';

// export const FormRow = styled.div`
//     display: flex;
// `;
// FormRow.defaultProps = {
//   'data-name': 'FormRow'
// };

export const FormCol = styled.div`
    flex: ${props => (props.colSpan ? props.colSpan : 1)};
`;
FormCol.defaultProps = {
  'data-name': 'FormCol'
};
