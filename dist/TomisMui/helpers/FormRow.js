'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  spacing: '24px'
};

var propTypes = {
  spacing: _react.PropTypes.string.isRequired
};

var FormRow = function FormRow(props) {
  var children = props.children,
      spacing = props.spacing;

  var childrenCnt = _react2.default.Children.count(children);
  //Set marginRight to spacing on every child except last child.  Set marginRight on last child to 0px
  return _react2.default.createElement(
    'div',
    _extends({ style: { display: 'flex' } }, props),
    _react2.default.Children.map(children, function (child, idx) {
      var marginRight = idx + 1 === childrenCnt ? '0px' : spacing;
      var cloned = _react2.default.cloneElement(child, {
        style: { marginRight: marginRight }
      });
      return cloned;
    })
  );
};

FormRow.defaultProps = defaultProps;
FormRow.propTypes = propTypes;
exports.default = FormRow;