import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'app/react-select.css';
//TODO: remove TomisSelectCheckbox
import TomisSelectCheckbox from 'TomisApp/TomisSelectCheckbox';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const setStateValue = (value, state, props) => {
  return { value };
};

const setStateIsChecked = (isChecked, state, props) => {
  return { isChecked };
};

const styles = {
  infoIconStyle: { position: 'absolute', bottom: '4px', left: 0, cursor: 'pointer', zIndex: 2 },
  infoIconDisabledStyle: { position: 'absolute', bottom: '4px', left: 0, cursor: 'pointer', zIndex: 2, color: '#dcdcdc' }
};

const initState = props => {
  const { value = null } = props;
  return {
    value,
    isChecked: true,
    dataSource: [
      { code: 'd1', description: 'data value 1' },
      { code: 'd2', description: 'data value 2' },
      { code: 'd3', description: 'data value 3' },
      { code: 'd4', description: 'data value 4' },
      { code: 'd5', description: 'data value 5' },
      { code: 'd6', description: 'data value 6' }
    ]
  };
};

const defaultProps = {
  valueKey: 'code',
  labelKey: 'description'
};

class TomisSelect extends Component {
  constructor(props) {
    super(props);
    this.state = initState(props);
    this.lovOnChange = this.lovOnChange.bind(this);
    this.handleClickCheckboxIcon = this.handleClickCheckboxIcon.bind(this);
  }

  lovOnChange(item) {
    if (item) {
      const value = item.code;
      this.setState(setStateValue.bind(this, value));
    }
  }

  handleClickCheckboxIcon() {
    this.setState(setStateIsChecked.bind(this, !this.state.isChecked));
  }

  doNothing() {
    return false;
  }

  render() {
    const { lovOnChange, handleClickCheckboxIcon, doNothing } = this;
    const { value, dataSource, isChecked } = this.state;
    const {
      id,
      options = dataSource,
      valueKey = 'code',
      labelKey = 'description',
      floatingLabelText,
      placeholder,
      title,
      disabled,
      isCloneable,
      disabledClone
    } = this.props;
    const inputProps = { id: id };
    return (
      <div className="MaterialSelector">
        {isCloneable &&
          !isChecked &&
          <TomisFontIcon
            name="check_box_outline_blank"
            style={disabledClone ? styles.infoIconDisabledStyle : styles.infoIconStyle}
            onTouchTap={disabledClone ? doNothing : handleClickCheckboxIcon}
          />}
        {isCloneable &&
          isChecked &&
          <TomisFontIcon
            name="check_box"
            style={disabledClone ? styles.infoIconDisabledStyle : styles.infoIconStyle}
            onTouchTap={disabledClone ? doNothing : handleClickCheckboxIcon}
          />}

        <Select
          clearable={false}
          placeholder=""
          hintText={'Select ' + (floatingLabelText || placeholder || title || 'Value')}
          searchingText="Retrieving..."
          matchProp="label"
          onChange={lovOnChange}
          options={options}
          valueKey={valueKey}
          labelKey={labelKey}
          value={value}
          disabled={disabled}
          backspaceRemoves={false}
          inputProps={inputProps}
          className={isCloneable ? 'is-cloneable' : 'is-not-cloneable'}
        />
        <label className={disabled ? 'is-disabled' : 'is-enabled'} style={{ left: isCloneable ? '28px' : 0 }}>
          {floatingLabelText}
        </label>
        {/*{isCloneable && <TomisSelectCheckbox dataSource={dataSource} disabled={disabled} disabledClone={disabledClone} {...this.props} />}*/}
      </div>
    );
  }
}
TomisSelect.defaultProps = defaultProps;
export default TomisSelect;
