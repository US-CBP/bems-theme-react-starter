'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    title: _react2.default.PropTypes.string,
    subtitle: _react2.default.PropTypes.string
};

var defaultProps = {
    title: 'Welcome to React-Theming',
    subtitle: 'Storybook Boilerplate Project'
};

var contextTypes = {
    muiTheme: _react2.default.PropTypes.object
};

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var palette = this.context.muiTheme.palette;

            var styleTitle = {
                color: palette.secondaryTextColor
            };
            var styleSubtitle = {
                color: palette.alternate1Color
            };
            var styleHeader = {
                backgroundColor: palette.alternateСanvasColor
            };
            return _react2.default.createElement(
                'div',
                { className: 'App App-header', style: styleHeader },
                _react2.default.createElement('img', { src: _logo2.default, className: 'App-logo', alt: 'logo' }),
                _react2.default.createElement(
                    'h2',
                    { style: styleTitle },
                    this.props.title
                ),
                _react2.default.createElement(
                    'h3',
                    { style: styleSubtitle },
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.contextTypes = contextTypes;

exports.default = Header;