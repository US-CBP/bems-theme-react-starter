import React, { Component } from 'react';
import FontIcon from './FontIcon';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AutoCompleteSelect extends Component {
  render() {
    const { value } = this.props;
    const { disabled, onChange: handleChangeLovVal, options, placeholder } = this.props;
    const displayPlaceholder = disabled ? '' : placeholder;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontIcon name="arrow_drop_down" />
        <Select options={options} disabled={disabled} placeholder={displayPlaceholder} onChange={handleChangeLovVal} value={value} clearable={false} />
      </div>
    );
  }
}

export default AutoCompleteSelect;
