import React, { PropTypes, Component } from 'react';
import TextFieldSimple from '../BemsMui/TextFieldSimple';
import IconButton from '../BemsMui/IconButton';
import _omit from 'lodash/omit';
import FontIcon from 'BemsMui/FontIcon';

const defaultProps = {};
const propTypes = {};

const defaultPaddingLeft = 30;
const shrinkPaddingLeft = defaultPaddingLeft / (5 / 6);

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
        <FontIcon name="arrow_drop_up" style={arrowDropUpIconStyle} onTouchTap={onTouchTapInfo} />
        <FontIcon name="arrow_drop_down" style={arrowDropDownIconStyle} onTouchTap={onTouchTapInfo} />
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
