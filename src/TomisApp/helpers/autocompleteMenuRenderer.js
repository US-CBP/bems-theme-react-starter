import classNames from 'classnames';
import React from 'react';
import Popover from 'material-ui/internal/Popover';

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

function menuRenderer(
    TomisAutoComplete,
    { focusedOption, instancePrefix, labelKey, onFocus, onSelect, optionClassName, optionComponent, optionRenderer, options, valueArray, valueKey, onOptionRef }
) {
    let Option = optionComponent;
    console.log('menuRenderer TomisAutoComplete.anchorEl.getBoundingClientRect()=', TomisAutoComplete.anchorEl.getBoundingClientRect());
    const anchorElBcr = TomisAutoComplete.anchorEl.getBoundingClientRect();

    return (
        <div style={{ position: 'fixed', backgroundColor: '#ffffff', maxHeight: '240px', top: `${anchorElBcr.bottom}px`, left: `${anchorElBcr.left}px`, overflowY: 'auto' }}>
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
        </div>
    );
}

export default menuRenderer;
