import React, { PropTypes, Component } from 'react';
import TextFieldSimple from '../TomisMui/TextFieldSimple';
import IconButton from '../TomisMui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import SvgIconArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import _omit from 'lodash/omit';

const defaultProps = {};
const propTypes = {};

const defaultPaddingLeft = 30;
const shrinkPaddingLeft = defaultPaddingLeft / 0.75;

const styles = {
  arrowDropUpIconStyle: { position: 'absolute', bottom: '24px', left: 0, cursor: 'pointer', zIndex: 2 },
  arrowDropDownIconStyle: { position: 'absolute', bottom: '12px', left: 0, cursor: 'pointer', zIndex: 2 },
  inputStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  hintStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  floatingLabelStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  floatingLabelShrinkStyle: { paddingLeft: `${shrinkPaddingLeft}px` }
};

const initState = {};

class TimeSpinner extends Component {
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
    const { fullWidth = true, hintText = 'Hint Text', floatingLabelText = 'Time Spinner Label', onTouchTapInfo = handleClickInfoIcon } = this.props;
    const { arrowDropDownIconStyle, arrowDropUpIconStyle, inputStyle, hintStyle, floatingLabelStyle, floatingLabelShrinkStyle } = styles;
    return (
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'inherit' }}>
        <SvgIconArrowDropUp style={arrowDropUpIconStyle} onTouchTap={onTouchTapInfo} />
        <SvgIconArrowDropDown style={arrowDropDownIconStyle} onTouchTap={onTouchTapInfo} />
        <TextFieldSimple
          inputStyle={inputStyle}
          fullWidth={fullWidth}
          hintStyle={hintStyle}
          hintText={hintText}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelText={floatingLabelText}
          floatingLabelShrinkStyle={floatingLabelShrinkStyle}
          {...keepProps}
        />
      </div>
    );
  }
}

TimeSpinner.defaultProps = defaultProps;
TimeSpinner.propTypes = propTypes;
export default TimeSpinner;
