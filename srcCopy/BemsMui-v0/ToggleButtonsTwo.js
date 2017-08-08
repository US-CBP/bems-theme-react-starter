import React, { PropTypes, Component } from 'react';
import ToggleButtons from './ToggleButtons';

const setStateValue = (curValue, state, props) => {
  return { curValue };
};

const defaultProps = {
  options: [{ label: 'Btn 1 Value 1', value: 'V1' }, { label: 'Btn2', value: 'V2' }],
  defaultSelected: -1
};

const propTypes = {
  options: PropTypes.array.isRequired,
  labelText: PropTypes.string,
  valueSelected: PropTypes.string.isRequired
};

class ToggleButtonsTwo extends Component {
  constructor(props) {
    super(props);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.state = {
      curValue: ''
    };
  }

  // componentDidMount() {
  //   const {valueSelected} = this.props;
  //   this.setState(setStateValue.bind(this, valueSelected));
  // }

  // componentWillReceiveProps(nextProps) {
  //   const {valueSelected} = nextProps.props;
  //   this.setState(setStateValue.bind(this, valueSelected));
  // }

  handleChangeValue(event, curValue) {
    event.stopPropagation();
    event.preventDefault();
    this.setState(setStateValue.bind(this, curValue));
  }

  render() {
    const { curValue } = this.state;
    const { options, labelText = 'Default Label', valueSelected } = this.props;
    return (
      <div>
        <label className="labeled-item">{labelText}</label>
        <ToggleButtonGroup name="genericName" valueSelected={curValue} {...this.props}>
          {options.map((option, idx) => {
            const { label, value } = option;
            return <ToggleButton key={`TB${idx}`} label={label} value={value} />;
          })}
        </ToggleButtonGroup>
      </div>
    );
  }
}

ToggleButtonsTwo.defaultProps = defaultProps;
ToggleButtonsTwo.propTypes = propTypes;

export default ToggleButtonsTwo;
