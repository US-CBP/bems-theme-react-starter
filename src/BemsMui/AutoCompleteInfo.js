import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoCompleteMui from 'BemsMui/AutoComplete';
import IconButton from 'BemsMui/IconButton';
import _omit from 'lodash/omit';
import FontIcon from 'BemsMui/FontIcon';

const defaultProps = {};
const propTypes = {};

const defaultPaddingLeft = 30;
const shrinkPaddingLeft = defaultPaddingLeft / (5 / 6);

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
        <FontIcon name="info" style={infoIconStyle} onTouchTap={onTouchTapInfo} />
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
          <FontIcon name="arrow_drop_down" />
        </IconButton>
      </div>
    );
  }
}

AutoCompleteInfo.defaultProps = defaultProps;
AutoCompleteInfo.propTypes = propTypes;
export default AutoCompleteInfo;
