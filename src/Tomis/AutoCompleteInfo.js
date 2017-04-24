import React, { PropTypes, Component } from 'react';
import AutoCompleteMui from '../TomisMui/AutoComplete';
import IconButton from '../TomisMui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import _omit from 'lodash/omit';

const defaultProps = {};
const propTypes = {};

const defaultPaddingLeft = 30;
const shrinkPaddingLeft = defaultPaddingLeft / 0.75;

const styles = {
  infoIconStyle: { position: 'absolute', bottom: '12px', left: 0, cursor: 'pointer', zIndex: 2 },
  inputStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  hintStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  floatingLabelStyle: { paddingLeft: `${defaultPaddingLeft}px` },
  floatingLabelShrinkStyle: { paddingLeft: `${shrinkPaddingLeft}px` }
};

const initState = {
  dataSource: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']
};

class AutoCompleteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.keepProps = {};
  }

  handleUpdateInput = (event, date) => {
    this.setState({});
  };

  handleClickInfoIcon = event => {
    alert('hi');
  };

  render() {
    this.keepProps = _omit(this.props, 'onTouchTapInfo');
    const { handleClickInfoIcon, keepProps } = this;
    const { fullWidth = true, hintText = 'Hint Text', floatingLabelText = 'LOV Label with Info', onTouchTapInfo = handleClickInfoIcon } = this.props;
    const { dataSource } = this.state;
    const { infoIconStyle, inputStyle, hintStyle, floatingLabelStyle, floatingLabelShrinkStyle } = styles;
    return (
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'inherit' }}>
        <InfoIcon style={infoIconStyle} onTouchTap={onTouchTapInfo} />
        <AutoCompleteMui
          inputStyle={inputStyle}
          fullWidth={fullWidth}
          hintStyle={hintStyle}
          hintText={hintText}
          dataSource={dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelStyle={floatingLabelStyle}
          floatingLabelText={floatingLabelText}
          floatingLabelShrinkStyle={floatingLabelShrinkStyle}
          {...keepProps}
        />
        {/* must use inline style for position on IconButton to override default */}
        <IconButton className="inline-icon" style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <SvgIconArrowDropDown />
        </IconButton>
      </div>
    );
  }
}

AutoCompleteInfo.defaultProps = defaultProps;
AutoCompleteInfo.propTypes = propTypes;
export default AutoCompleteInfo;
