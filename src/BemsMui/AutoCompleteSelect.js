import React, { Component } from 'react';
import FontIcon from './FontIcon';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AutoCompleteSelect extends Component {
  render() {
    const { value, disabled, onChange: handleChangeLovVal, options, placeholder, readOnly } = this.props;
    const isDisabled = readOnly ? true : disabled ? true : false;
    const displayPlaceholder = isDisabled ? '' : placeholder;
    return (
      <div className="material-select" style={{ display: 'flex', alignItems: 'center' }}>
        <FontIcon name="arrow_drop_down" />
        <Select options={options} disabled={isDisabled} placeholder={displayPlaceholder} onChange={handleChangeLovVal} value={value} clearable={false} />
      </div>
    );
  }
}

export default AutoCompleteSelect;
