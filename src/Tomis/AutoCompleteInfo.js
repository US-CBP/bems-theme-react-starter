import React, { PropTypes, Component } from 'react';
import AutoCompleteMui from '../TomisMui/AutoComplete';
import IconButton from '../TomisMui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

const defaultProps = {};
const propTypes = {};

const initState = {
  dataSource: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']
};

class AutoCompleteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleUpdateInput = (event, date) => {
    this.setState({});
  };

  render() {
    const { fullWidth = true } = this.props;
    const { dataSource } = this.state;
    return (
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'inherit' }}>
        <IconButton style={{ position: 'absolute', bottom: 0, left: 0, paddingLeft: 0 }} className="inline-icon">
          <InfoIcon />
        </IconButton>
        <AutoCompleteMui
          inputStyle={{ paddingLeft: '36px' }}
          fullWidth={fullWidth}
          hintText="Select Value"
          dataSource={dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="LOV Value With Info"
          {...this.props}
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
