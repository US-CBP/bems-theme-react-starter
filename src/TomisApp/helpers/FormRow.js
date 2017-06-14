import React, { Children } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  spacing: '24px'
};

const propTypes = {
  spacing: PropTypes.string.isRequired
};

const FormRow = props => {
  const { children, spacing } = props;
  const childrenCnt = React.Children.count(children);
  //Set marginRight to spacing on every child except last child.  Set marginRight on last child to 0px
  return (
    <div style={{ display: 'flex' }} {...props}>
      {React.Children.map(children, (child, idx) => {
        const marginRight = idx + 1 === childrenCnt ? '0px' : spacing;
        const cloned = React.cloneElement(child, {
          style: { marginRight }
        });
        return cloned;
      })}
    </div>
  );
};

FormRow.defaultProps = defaultProps;
FormRow.propTypes = propTypes;
export default FormRow;
