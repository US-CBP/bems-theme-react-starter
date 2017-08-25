import classNames from 'classnames';
import React from 'react';
import Paper from 'material-ui/Paper';

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

function menuRenderer(
    TomisAutoComplete,
    { focusedOption, instancePrefix, labelKey, onFocus, onSelect, optionClassName, optionComponent, optionRenderer, options, valueArray, valueKey, onOptionRef }
) {
    let Option = optionComponent;
    const anchorElPosition = TomisAutoComplete.anchorEl.getBoundingClientRect();
    const extraW = 30;
    return (
        <Paper
            elevation={8}
            style={{
                position: 'fixed',
                top: `${anchorElPosition.bottom}px`,
                left: `${anchorElPosition.left}px`,
                maxHeight: '200px',
                minWidth: `${anchorElPosition.width + extraW}px`,
                overflowY: 'auto'
            }}
        >
            {options.map((option, i) => {
                let isSelected = valueArray && valueArray.indexOf(option) > -1;
                let isFocused = option === focusedOption;
                let optionClass = classNames(optionClassName, {
                    'Select-option': true,
                    'is-selected': isSelected,
                    'is-focused': isFocused,
                    'is-disabled': option.disabled
                });

                return (
                    <Option
                        className={optionClass}
                        instancePrefix={instancePrefix}
                        isDisabled={option.disabled}
                        isFocused={isFocused}
                        isSelected={isSelected}
                        key={`option-${i}-${option[valueKey]}`}
                        onFocus={onFocus}
                        onSelect={onSelect}
                        option={option}
                        optionIndex={i}
                        ref={ref => {
                            onOptionRef(ref, isFocused);
                        }}
                    >
                        {optionRenderer(option, i)}
                    </Option>
                );
            })}
        </Paper>
    );
}

export default menuRenderer;
