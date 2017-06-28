'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactThemeProvider = require('react-theme-provider');

var _reactThemeProvider2 = _interopRequireDefault(_reactThemeProvider);

var _setCSS = require('./.themes/setCSS');

var _setCSS2 = _interopRequireDefault(_setCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reqThemes = require.context('./.themes/', true, /.json/);
var themesList = [];
reqThemes.keys().forEach(function (filename) {
    themesList.push(reqThemes(filename));
});

var propTypes = {
    themes: _react2.default.PropTypes.array.isRequired,
    children: _react2.default.PropTypes.element
};

var defaultProps = {
    themes: themesList
};

var ThemeSwitcher = function (_Component) {
    _inherits(ThemeSwitcher, _Component);

    function ThemeSwitcher(props) {
        _classCallCheck(this, ThemeSwitcher);

        var _this = _possibleConstructorReturn(this, (ThemeSwitcher.__proto__ || Object.getPrototypeOf(ThemeSwitcher)).call(this, props));

        _this.state = {
            selectedTheme: 0
        };

        _this.onSelect = _this.onSelect.bind(_this);
        return _this;
    }

    _createClass(ThemeSwitcher, [{
        key: 'onSelect',
        value: function onSelect(event) {
            this.setState({ selectedTheme: parseInt(event.target.value, 10) });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'select',
                    {
                        name: 'theme-switcher',
                        id: 'theme-switcher',
                        value: this.state.selectedTheme,
                        onChange: this.onSelect,
                        style: { margin: 4 }
                    },
                    _react2.default.createElement(
                        'option',
                        { value: 0 },
                        'Theme 1'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: 1 },
                        'Theme 2'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: 2 },
                        'Theme 3'
                    )
                ),
                _react2.default.createElement(
                    _reactThemeProvider2.default,
                    {
                        themes: this.props.themes,
                        themeInd: this.state.selectedTheme,
                        setCSS: _setCSS2.default
                    },
                    _react2.default.createElement(
                        'div',
                        null,
                        this.props.children
                    )
                )
            );
        }
    }]);

    return ThemeSwitcher;
}(_react.Component);

ThemeSwitcher.propTypes = propTypes;
ThemeSwitcher.defaultProps = defaultProps;

exports.default = ThemeSwitcher;