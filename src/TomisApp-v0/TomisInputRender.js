import React from 'react';
import PropTypes from 'prop-types';
import TextFieldSimple from 'BemsMui/TextFieldSimple';
import TextFieldCheckbox from 'BemsMui/TextField/TextFieldCheckbox';

const charCountStyle = {
  bottom: '24px'
};

const defaultProps = {
  isCloneable: false
};

const propTypes = {
  isCloneable: PropTypes.bool
};

const TomisInputRender = props => {
  const { hintText, floatingLabelText, maxLength, isCloneable, disabled, disabledClone, style, handleChangeVal, val } = props;
  return (
    <div className="flex-1">
      {isCloneable &&
        <TextFieldCheckbox
          hintText={hintText}
          floatingLabelText={floatingLabelText}
          onChange={handleChangeVal}
          value={val}
          maxLength={maxLength}
          fullWidth={true}
          disabled={disabled}
          disabledClone={disabledClone}
          charCountStyle={charCountStyle}
          style={style}
        />}
      {!isCloneable &&
        <TextFieldSimple
          hintText={hintText}
          floatingLabelText={floatingLabelText}
          onChange={handleChangeVal}
          value={val}
          maxLength={maxLength}
          charCountStyle={charCountStyle}
          style={style}
        />}
    </div>
  );
};

TomisInputRender.defaultProps = defaultProps;
TomisInputRender.propTypes = propTypes;
export default TomisInputRender;
