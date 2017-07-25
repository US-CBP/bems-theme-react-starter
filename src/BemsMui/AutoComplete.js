import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutoCompleteMui from 'BemsMui/AutoCompleteMui';
import IconButton from 'BemsMui/IconButton';
import FontIcon from 'BemsMui/FontIcon';

const defaultProps = {};
const propTypes = {};

const initState = {
  dataSource: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']
};

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleUpdateInput = (event, date) => {
    this.setState({});
  };

  render() {
    const { handleUpdateInput } = this;
    const { fullWidth = true, hintText = 'Select Value', floatingLabelText = 'LOV Value' } = this.props;
    const { dataSource } = this.state;
    return (
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'inherit' }}>
        <AutoCompleteMui
          fullWidth={fullWidth}
          hintText={hintText}
          dataSource={dataSource}
          onUpdateInput={handleUpdateInput}
          floatingLabelText={floatingLabelText}
          {...this.props}
        />
        {/* must use inline style for position on IconButton to override default */}
        <IconButton className="inline-icon" style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <FontIcon name="arrow_drop_down" />
        </IconButton>
      </div>
    );
  }
}

AutoComplete.defaultProps = defaultProps;
AutoComplete.propTypes = propTypes;
export default AutoComplete;
