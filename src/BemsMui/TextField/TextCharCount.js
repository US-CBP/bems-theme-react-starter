import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {
  /**
   * True if current count exceeds maximum count.
   */
  countError: PropTypes.bool,

  /**
   * Current number of character in the Textfield.
   */
  currentChar: PropTypes.number,

  /**
   * Override the inline-styles of the error element.
   */
  errorStyle: PropTypes.object,

  /**
   * Maximum number of character in the Textfield.
   */
  maxChar: PropTypes.number,

  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: PropTypes.object.isRequired,

  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object
};

const defaultProps = {};

const TextCharCount = props => {
  const { countError, currentChar, maxChar, muiTheme, style, errorStyle, charCountStyle = {} } = props;

  const { prepareStyles, textField: { hintColor, errorColor } } = muiTheme;

  const styles = {
    root: {
      position: 'relative',
      color: hintColor,
      float: 'right',
      fontSize: '12px',
      bottom: '8px'
    },
    error: {
      color: errorColor
    }
  };

  let regularStyle = Object.assign({}, styles.root, style, charCountStyle);
  if (countError) regularStyle = Object.assign({}, styles.root, styles.error, errorStyle);

  return (
    <div style={prepareStyles(regularStyle)}>
      {currentChar}/{maxChar}
    </div>
  );
};

TextCharCount.propTypes = propTypes;
TextCharCount.defaultProps = defaultProps;

export default TextCharCount;
