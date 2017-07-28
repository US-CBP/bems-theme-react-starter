import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FontIcon from './FontIcon';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';

const options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];

const defaultProps = {
    id: `ACI-${new Date().getTime()}`
};

class AutoCompleteSelect extends Component {
    input = null;
    isFocused = false;

    state = {
        val: ''
    };

    focus = () => {
        this.input.focus();
        this.isFocused = true;
    };

    blur = () => {
        this.input.blur();
        this.isFocused = false;
    };

    handleChangeLovVal = val => {
        this.setState({ val });
    };

    //   handleBlur = () => {
    //     this.isFocused = false;
    //   };

    //   handleFocus = () => {
    //     this.isFocused = true;
    //   };

    handleClickArrowDropDown = evt => {
        const { inputProps: { lov, lov: { state: lovState, input } } } = this.props;
        // console.log('handleClickArrowDropDown, lov.input, lov.state=', lov.input, lov.state);
        console.log('handleClickArrowDropDown, lov.state=', lov.state);
        const { isFocused } = lovState;
        if (isFocused) {
            input.blur();
        } else {
            input.focus();
        }
    };

    // handleClickArrowDropDown = evt => {
    //     const { input, isFocused } = this;
    //     if (isFocused) {
    //         input.blur();
    //     } else {
    //         input.focus();
    //     }
    // };

    render() {
        const { handleChangeLovVal } = this;
        const { val } = this.state;
        const classes = this.props.classes;
        //this.props originate from MUI <Input /> Component
        //inputProps originate from AutoSuggest Component
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FontIcon name="arrow_drop_down" />
                <Select options={options} onChange={handleChangeLovVal} value={val} clearable={false} />
            </div>
        );
    }
}

AutoCompleteSelect.defaultProps = defaultProps;
export default AutoCompleteSelect;
