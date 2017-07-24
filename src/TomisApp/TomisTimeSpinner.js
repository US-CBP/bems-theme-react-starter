import React, { PropTypes, Component } from 'react';
import TextFieldSimple from 'BemsMui/TextFieldSimple';
import _omit from 'lodash/omit';
import TextFieldCheckbox from 'BemsMui/TextField/TextFieldCheckbox';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const defaultProps = { isCloneable: false, disabledClone: false };
const propTypes = {};

const defaultPaddingLeft = 30;
const shrinkPaddingLeft = defaultPaddingLeft / (5 / 6);

const styles = {
  arrowDropUpIconStyleDefault: { position: 'absolute', bottom: '24px', left: 0, cursor: 'pointer', zIndex: 2 },
  arrowDropUpIsCloneableIconStyle: { position: 'absolute', bottom: '18px', left: '24px', cursor: 'pointer', zIndex: 2 },
  arrowDropDownIconStyleDefault: { position: 'absolute', bottom: '12px', left: 0, cursor: 'pointer', zIndex: 2 },
  arrowDropDownIsCloneableIconStyle: { position: 'absolute', bottom: '6px', left: '24px', cursor: 'pointer', zIndex: 2 },
  inputStyleDefault: { paddingLeft: `${defaultPaddingLeft}px` },
  hintStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  floatingLabelStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  floatingLabelShrinkStyle: { paddingLeft: `${shrinkPaddingLeft}px` }
};

const initState = {};

class TomisTimeSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.keepProps = {};
  }

  handleUpdateInput = (event, date) => {
    this.setState({});
  };

  handleClickInfoIcon = event => {
    //TODO: Implement Time Spin
  };

  render() {
    this.keepProps = _omit(this.props, 'onTouchTapInfo');
    const { handleClickInfoIcon, keepProps } = this;
    const {
      fullWidth = true,
      hintText = 'Hint Text',
      floatingLabelText = 'Time Spinner Label',
      onTouchTapInfo = handleClickInfoIcon,
      isCloneable,
      disabledClone,
      textFieldSimpleStyle,
      inputStyle,
      underLineStyle,
      arrowDropDownIconStyle,
      arrowDropUpIconStyle,
      isDisplayArrowIcons
    } = this.props;
    const {
      arrowDropDownIconStyleDefault,
      arrowDropUpIconStyleDefault,
      arrowDropUpIsCloneableIconStyle,
      arrowDropDownIsCloneableIconStyle,
      inputStyleDefault,
      hintStyle,
      floatingLabelStyle,
      floatingLabelShrinkStyle
    } = styles;
    return (
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'inherit' }}>
        {isDisplayArrowIcons &&
          <TomisFontIcon
            name="arrow_drop_up"
            style={isCloneable ? arrowDropUpIsCloneableIconStyle : Object.assign({}, arrowDropUpIconStyleDefault, arrowDropUpIconStyle)}
            onTouchTap={onTouchTapInfo}
          />}
        {isDisplayArrowIcons &&
          <TomisFontIcon
            name="arrow_drop_down"
            style={isCloneable ? arrowDropDownIsCloneableIconStyle : Object.assign({}, arrowDropDownIconStyleDefault, arrowDropDownIconStyle)}
            onTouchTap={onTouchTapInfo}
          />}
        {isCloneable &&
          <TextFieldCheckbox
            inputStyle={Object.assign({}, inputStyleDefault, inputStyle)}
            hintText={hintText}
            hintStyle={hintStyle}
            floatingLabelStyle={floatingLabelStyle}
            floatingLabelText={floatingLabelText}
            floatingLabelShrinkStyle={floatingLabelShrinkStyle}
            fullWidth={true}
            isCloneable={isCloneable}
            disabledClone={disabledClone}
            {...keepProps}
          />}

        {!isCloneable &&
          <TextFieldSimple
            inputStyle={Object.assign({}, inputStyleDefault, inputStyle)}
            fullWidth={fullWidth}
            hintStyle={hintStyle}
            hintText={hintText}
            floatingLabelStyle={floatingLabelStyle}
            floatingLabelText={floatingLabelText}
            floatingLabelShrinkStyle={floatingLabelShrinkStyle}
            style={textFieldSimpleStyle}
            underLineStyle={underLineStyle}
            {...keepProps}
          />}
      </div>
    );
  }
}

TomisTimeSpinner.defaultProps = defaultProps;
TomisTimeSpinner.propTypes = propTypes;
export default TomisTimeSpinner;
