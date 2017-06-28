'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _propTypes = require('material-ui/utils/propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var caseInsensitiveFilter = function caseInsensitiveFilter(searchText, key) {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

function getStyles(props, context, state) {
    var anchorEl = state.anchorEl;
    var fullWidth = props.fullWidth;


    var styles = {
        root: {
            display: 'inline-block',
            position: 'relative',
            width: fullWidth ? '100%' : 256
        },
        menu: {
            width: '100%'
        },
        list: {
            display: 'block',
            width: fullWidth ? '100%' : 256
        },
        innerDiv: {
            overflow: 'hidden'
        },
        inlineIcon: {
            position: 'absolute',
            bottom: 0,
            right: 0
        }
    };

    if (anchorEl && fullWidth) {
        styles.popover = {
            width: anchorEl.clientWidth
        };
    }

    return styles;
}

var AutoComplete = function (_Component) {
    _inherits(AutoComplete, _Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

        _this.state = {
            anchorEl: null,
            focusTextField: true,
            open: false,
            searchText: undefined
        };

        _this.handleRequestClose = function () {
            // Only take into account the Popover clickAway when we are
            // not focusing the TextField.
            if (!_this.state.focusTextField) {
                _this.close();
            }
        };

        _this.handleMouseDown = function (event) {
            // Keep the TextField focused
            event.preventDefault();
        };

        _this.handleItemTouchTap = function (event, child) {
            console.log('handleItemTouchTap called');
            _this.popoverEmitter = null;
            var dataSource = _this.props.dataSource;

            var index = parseInt(child.key, 10);
            var chosenRequest = dataSource[index];
            var searchText = _this.chosenRequestText(chosenRequest);

            _this.setState({
                searchText: searchText
            }, function () {
                _this.props.onUpdateInput(searchText, _this.props.dataSource, {
                    source: 'touchTap'
                });

                _this.timerTouchTapCloseId = setTimeout(function () {
                    _this.timerTouchTapCloseId = null;
                    _this.close();
                    _this.props.onNewRequest(chosenRequest, index);
                }, _this.props.menuCloseDelay);
            });
        };

        _this.chosenRequestText = function (chosenRequest) {
            if (typeof chosenRequest === 'string') {
                return chosenRequest;
            } else {
                return chosenRequest[_this.props.dataSourceConfig.text];
            }
        };

        _this.handleEscKeyDown = function () {
            _this.close();
        };

        _this.handleKeyDown = function (event) {
            if (_this.props.onKeyDown) _this.props.onKeyDown(event);
            _this.isIgnoreFilter = false;

            switch ((0, _keycode2.default)(event)) {
                case 'enter':
                    _this.close();
                    var searchText = _this.state.searchText;
                    if (searchText !== '') {
                        _this.props.onNewRequest(searchText, -1);
                    }
                    break;

                case 'esc':
                    _this.close();
                    break;

                case 'down':
                    event.preventDefault();
                    // this.isIgnoreFilter = true;
                    _this.setState({
                        open: true,
                        focusTextField: false,
                        anchorEl: _reactDom2.default.findDOMNode(_this.searchTextField)
                    });
                    break;

                default:
                    break;
            }
        };

        _this.handleChange = function (event) {
            var searchText = event.target.value;
            console.log('handleChange called with searchText=', searchText);
            _this.popoverEmitter = null;
            _this.isIgnoreFilter = false;
            // Make sure that we have a new searchText.
            // Fix an issue with a Cordova Webview
            if (searchText === _this.state.searchText) {
                return;
            }

            _this.setState({
                searchText: searchText,
                open: true,
                anchorEl: _reactDom2.default.findDOMNode(_this.searchTextField)
            }, function () {
                _this.props.onUpdateInput(searchText, _this.props.dataSource, {
                    source: 'change'
                });
            });
        };

        _this.handleBlur = function (event) {
            if (_this.state.focusTextField && _this.timerTouchTapCloseId === null) {
                _this.timerBlurClose = setTimeout(function () {
                    _this.close();
                }, 0);
            }

            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };

        _this.handleFocus = function (event) {
            _this.isIgnoreFilter = true;
            if (!_this.state.open && _this.props.openOnFocus || _this.popoverEmitter === 'ICON') {
                _this.setState({
                    open: true,
                    anchorEl: _reactDom2.default.findDOMNode(_this.searchTextField)
                });
            }

            _this.setState({
                focusTextField: true
            });

            if (_this.props.onFocus) {
                _this.props.onFocus(event);
            }
        };

        _this.toggleOpen = function (event) {
            console.log('toggleOpen start, this.state.open=', _this.state.open);

            if (_this.state.open) {
                _this.popoverEmitter = null;
                _this.close();
            } else {
                // this.handleFocus(event);
                _this.focus();
                // this.setState({
                //     open: true,
                //     anchorEl: ReactDOM.findDOMNode(this.searchTextField),
                //     focusTextField: !this.state.open
                // });
            }
            //     () => {
            //         console.log('toggleOpen after setState, this.state.open=', this.state.open);
            //         if (!this.state.open) {
            //             this.popoverEmitter = null;
            //         }
            //         if (this.state.open) {
            //             this.focus();
            //         }
            //     }
            // );
            // this.setState({
            //     focusTextField: true
            // });
            // if (this.props.onFocus) {
            //     this.props.onFocus(event);
            // }
        };

        _this.handleClickIconButton = function (event) {
            event.stopPropagation();
            _this.popoverEmitter = 'ICON';
            _this.toggleOpen(event);
        };

        _this.popoverEmitter = null;
        _this.searchTextField = null;
        _this.isIgnoreFilter = false;
        return _this;
    }

    _createClass(AutoComplete, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.requestsList = [];
            this.setState({
                open: this.props.open,
                searchText: this.props.searchText
            });
            this.timerTouchTapCloseId = null;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.searchText !== nextProps.searchText) {
                this.setState({
                    searchText: nextProps.searchText
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timerTouchTapCloseId);
            clearTimeout(this.timerBlurClose);
        }
    }, {
        key: 'close',
        value: function close() {
            //Manage open/close via toggleOpen
            if (this.popoverEmitter === 'ICON') return;
            console.log('close has been called');

            this.setState({
                open: false,
                anchorEl: null
            });

            if (this.props.onClose) {
                this.props.onClose();
            }
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.searchTextField.blur();
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.searchTextField.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var handleClickIconButton = this.handleClickIconButton;

            var _props = this.props,
                anchorOrigin = _props.anchorOrigin,
                animated = _props.animated,
                animation = _props.animation,
                dataSource = _props.dataSource,
                dataSourceConfig = _props.dataSourceConfig,
                disableFocusRipple = _props.disableFocusRipple,
                errorStyle = _props.errorStyle,
                floatingLabelText = _props.floatingLabelText,
                filter = _props.filter,
                fullWidth = _props.fullWidth,
                style = _props.style,
                hintText = _props.hintText,
                maxSearchResults = _props.maxSearchResults,
                menuCloseDelay = _props.menuCloseDelay,
                textFieldStyle = _props.textFieldStyle,
                menuStyle = _props.menuStyle,
                menuProps = _props.menuProps,
                listStyle = _props.listStyle,
                targetOrigin = _props.targetOrigin,
                onClose = _props.onClose,
                onNewRequest = _props.onNewRequest,
                onUpdateInput = _props.onUpdateInput,
                openOnFocus = _props.openOnFocus,
                popoverProps = _props.popoverProps,
                searchTextProp = _props.searchText,
                other = _objectWithoutProperties(_props, ['anchorOrigin', 'animated', 'animation', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'floatingLabelText', 'filter', 'fullWidth', 'style', 'hintText', 'maxSearchResults', 'menuCloseDelay', 'textFieldStyle', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin', 'onClose', 'onNewRequest', 'onUpdateInput', 'openOnFocus', 'popoverProps', 'searchText']);

            var _ref = popoverProps || {},
                popoverStyle = _ref.style,
                popoverOther = _objectWithoutProperties(_ref, ['style']);

            var _state = this.state,
                open = _state.open,
                anchorEl = _state.anchorEl,
                searchText = _state.searchText,
                focusTextField = _state.focusTextField;
            var prepareStyles = this.context.muiTheme.prepareStyles;

            var styles = getStyles(this.props, this.context, this.state);

            var requestsList = [];

            dataSource.every(function (item, index) {
                switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
                    case 'string':
                        if (filter(searchText, item, item)) {
                            requestsList.push({
                                text: item,
                                value: _react2.default.createElement(_MenuItem2.default, { innerDivStyle: styles.innerDiv, value: item, primaryText: item, disableFocusRipple: disableFocusRipple, key: index })
                            });
                        }
                        break;

                    case 'object':
                        if (item && typeof item[_this2.props.dataSourceConfig.text] === 'string') {
                            var itemText = item[_this2.props.dataSourceConfig.text];

                            if (!_this2.isIgnoreFilter) {
                                if (!_this2.props.filter(searchText, itemText, item) && _this2.popoverEmitter === null) break;
                            }

                            var itemValue = item[_this2.props.dataSourceConfig.value];
                            if (itemValue.type && (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {
                                requestsList.push({
                                    text: itemText,
                                    value: _react2.default.cloneElement(itemValue, {
                                        key: index,
                                        disableFocusRipple: disableFocusRipple
                                    })
                                });
                            } else {
                                requestsList.push({
                                    text: itemText,
                                    value: _react2.default.createElement(_MenuItem2.default, { innerDivStyle: styles.innerDiv, primaryText: itemText, disableFocusRipple: disableFocusRipple, key: index })
                                });
                            }
                        }
                        break;

                    default:
                    // Do nothing
                }

                return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
            });

            this.requestsList = requestsList;

            var menu = open && requestsList.length > 0 && _react2.default.createElement(
                _Menu2.default,
                _extends({
                    autoWidth: false,
                    disableAutoFocus: focusTextField,
                    onEscKeyDown: this.handleEscKeyDown,
                    initiallyKeyboardFocused: true,
                    onItemTouchTap: this.handleItemTouchTap,
                    onMouseDown: this.handleMouseDown,
                    style: Object.assign(styles.menu, menuStyle),
                    listStyle: Object.assign(styles.list, listStyle)
                }, menuProps),
                requestsList.map(function (i) {
                    return i.value;
                })
            );

            return _react2.default.createElement(
                'div',
                { style: prepareStyles(Object.assign(styles.root, style)) },
                _react2.default.createElement(_TextField2.default, _extends({
                    ref: function ref(_ref2) {
                        return _this2.searchTextField = _ref2;
                    },
                    autoComplete: 'off',
                    value: searchText,
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    onFocus: this.handleFocus,
                    onKeyDown: this.handleKeyDown,
                    floatingLabelText: floatingLabelText,
                    hintText: hintText,
                    fullWidth: fullWidth,
                    multiLine: false,
                    errorStyle: errorStyle,
                    style: textFieldStyle
                }, other)),
                _react2.default.createElement(
                    _IconButton2.default,
                    { onTouchTap: handleClickIconButton, style: styles.inlineIcon },
                    _react2.default.createElement(_arrowDropDown2.default, null)
                ),
                _react2.default.createElement(
                    _Popover2.default,
                    _extends({
                        style: Object.assign({}, styles.popover, popoverStyle),
                        canAutoPosition: false,
                        anchorOrigin: anchorOrigin,
                        targetOrigin: targetOrigin,
                        open: open,
                        anchorEl: anchorEl,
                        useLayerForClickAway: false,
                        onRequestClose: this.handleRequestClose,
                        animated: animated,
                        animation: animation
                    }, popoverOther),
                    menu
                )
            );
        }
    }]);

    return AutoComplete;
}(_react.Component);

AutoComplete.propTypes = {
    /**
    * Location of the anchor for the auto complete.
    */
    anchorOrigin: _propTypes2.default.origin,
    /**
    * If true, the auto complete is animated as it is toggled.
    */
    animated: _react.PropTypes.bool,
    /**
    * Override the default animation component used.
    */
    animation: _react.PropTypes.func,
    /**
    * Array of strings or nodes used to populate the list.
    */
    dataSource: _react.PropTypes.array.isRequired,
    /**
    * Config for objects list dataSource.
    *
    * @typedef {Object} dataSourceConfig
    *
    * @property {string} text `dataSource` element key used to find a string to be matched for search
    * and shown as a `TextField` input value after choosing the result.
    * @property {string} value `dataSource` element key used to find a string to be shown in search results.
    */
    dataSourceConfig: _react.PropTypes.object,
    /**
    * Disables focus ripple when true.
    */
    disableFocusRipple: _react.PropTypes.bool,
    /**
    * Override style prop for error.
    */
    errorStyle: _react.PropTypes.object,
    /**
    * The error content to display.
    */
    errorText: _react.PropTypes.node,
    /**
    * Callback function used to filter the auto complete.
    *
    * @param {string} searchText The text to search for within `dataSource`.
    * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
    * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
    */
    filter: _react.PropTypes.func,
    /**
    * The content to use for adding floating label element.
    */
    floatingLabelText: _react.PropTypes.node,
    /**
    * If true, the field receives the property `width: 100%`.
    */
    fullWidth: _react.PropTypes.bool,
    /**
    * The hint content to display.
    */
    hintText: _react.PropTypes.node,
    /**
    * Override style for list.
    */
    listStyle: _react.PropTypes.object,
    /**
    * The max number of search results to be shown.
    * By default it shows all the items which matches filter.
    */
    maxSearchResults: _react.PropTypes.number,
    /**
    * Delay for closing time of the menu.
    */
    menuCloseDelay: _react.PropTypes.number,
    /**
    * Props to be passed to menu.
    */
    menuProps: _react.PropTypes.object,
    /**
    * Override style for menu.
    */
    menuStyle: _react.PropTypes.object,
    /** @ignore */
    onBlur: _react.PropTypes.func,
    /**
    * Callback function fired when the menu is closed.
    */
    onClose: _react.PropTypes.func,
    /** @ignore */
    onFocus: _react.PropTypes.func,
    /** @ignore */
    onKeyDown: _react.PropTypes.func,
    /**
    * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
    *
    * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
    * or the text value of the corresponding list item that was selected.
    * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
    * `TextField`.
    */
    onNewRequest: _react.PropTypes.func,
    /**
    * Callback function that is fired when the user updates the `TextField`.
    *
    * @param {string} searchText The auto-complete's `searchText` value.
    * @param {array} dataSource The auto-complete's `dataSource` array.
    * @param {object} params Additional information linked the update.
    */
    onUpdateInput: _react.PropTypes.func,
    /**
    * Auto complete menu is open if true.
    */
    open: _react.PropTypes.bool,
    /**
    * If true, the list item is showed when a focus event triggers.
    */
    openOnFocus: _react.PropTypes.bool,
    /**
    * Props to be passed to popover.
    */
    popoverProps: _react.PropTypes.object,
    /**
    * Text being input to auto complete.
    */
    searchText: _react.PropTypes.string,
    /**
    * Override the inline-styles of the root element.
    */
    style: _react.PropTypes.object,
    /**
    * Origin for location of target.
    */
    targetOrigin: _propTypes2.default.origin,
    /**
    * Override the inline-styles of AutoComplete's TextField element.
    */
    textFieldStyle: _react.PropTypes.object
};
AutoComplete.defaultProps = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
    },
    animated: true,
    dataSourceConfig: {
        text: 'text',
        value: 'value'
    },
    disableFocusRipple: true,
    filter: caseInsensitiveFilter,
    fullWidth: true,
    open: false,
    openOnFocus: true,
    onUpdateInput: function onUpdateInput() {},
    onNewRequest: function onNewRequest() {},
    searchText: '',
    menuCloseDelay: 300,
    targetOrigin: {
        vertical: 'top',
        horizontal: 'left'
    }
};
AutoComplete.contextTypes = {
    muiTheme: _react.PropTypes.object.isRequired
};


AutoComplete.levenshteinDistance = function (searchText, key) {
    var current = [];
    var prev = void 0;
    var value = void 0;

    for (var i = 0; i <= key.length; i++) {
        for (var j = 0; j <= searchText.length; j++) {
            if (i && j) {
                if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
            } else {
                value = i + j;
            }
            prev = current[j];
            current[j] = value;
        }
    }
    return current.pop();
};

AutoComplete.noFilter = function () {
    return true;
};

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
    return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = function (searchText, key) {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
    if (distanceLessThan === undefined) {
        return AutoComplete.levenshteinDistance;
    } else if (typeof distanceLessThan !== 'number') {
        throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
    }

    return function (s, k) {
        return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
    };
};

AutoComplete.fuzzyFilter = function (searchText, key) {
    var compareString = key.toLowerCase();
    searchText = searchText.toLowerCase();

    var searchTextIndex = 0;
    for (var index = 0; index < key.length; index++) {
        if (compareString[index] === searchText[searchTextIndex]) {
            searchTextIndex += 1;
        }
    }

    return searchTextIndex === searchText.length;
};

AutoComplete.Item = _MenuItem2.default;
AutoComplete.Divider = _Divider2.default;

exports.default = AutoComplete;