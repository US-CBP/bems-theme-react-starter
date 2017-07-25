import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ToggleButton, ToggleButtonGroup } from 'BemsMui/ToggleButton';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const styles = {
  root: {
    infoIconStyle: { cursor: 'pointer', zIndex: 2 },
    infoIconDisabledStyle: { cursor: 'pointer', zIndex: 2, color: '#dcdcdc' }
  }
};

const initState = {
  isChecked: true
};

const defaultProps = {
  options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }, { label: 'Btn4', value: 'V3' }],
  defaultSelected: -1,
  isCloneable: false,
  disabledClone: false
};

const propTypes = {
  options: PropTypes.array.isRequired,
  labelText: PropTypes.string,
  valueSelected: PropTypes.string.isRequired,
  isCloneable: PropTypes.bool
};

class TomisToggle extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleClickCheckboxIcon = this.handleClickCheckboxIcon.bind(this);
  }

  handleClickCheckboxIcon() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  doNothing() {
    return false;
  }

  render() {
    const { options, labelText = 'Default Label', valueSelected, isCloneable, disabledClone } = this.props;
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <label className="labeled-item">&nbsp;</label>
            {isCloneable &&
              !this.state.isChecked &&
              <TomisFontIcon
                name="check_box_outline_blank"
                style={disabledClone ? styles.root.infoIconDisabledStyle : styles.root.infoIconStyle}
                onTouchTap={disabledClone ? this.doNothing : this.handleClickCheckboxIcon}
              />}
            {isCloneable &&
              this.state.isChecked &&
              <TomisFontIcon
                name="check_box"
                style={disabledClone ? styles.root.infoIconDisabledStyle : styles.root.infoIconStyle}
                onTouchTap={disabledClone ? this.doNothing : this.handleClickCheckboxIcon}
              />}
          </div>
          <div>
            <label className="labeled-item">
              {labelText}
            </label>
            <ToggleButtonGroup name="genericName" valueSelected={valueSelected} {...this.props}>
              {options.map((option, idx) => {
                const { label, value } = option;
                return <ToggleButton key={`TB${idx}`} label={label} value={value} />;
              })}
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

TomisToggle.defaultProps = defaultProps;
TomisToggle.propTypes = propTypes;

export default TomisToggle;
