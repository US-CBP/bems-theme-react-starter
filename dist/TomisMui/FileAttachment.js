'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = { label: 'Attachments' };

var propTypes = { label: _react.PropTypes.oneOfType([(_react.PropTypes.node, _react.PropTypes.string)]) };

var FileAttachment = function FileAttachment(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  var label = props.label;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      label
    ),
    _react2.default.createElement(
      'div',
      { style: { fontSize: '12px' } },
      'Upload TSS Risk Assessment'
    ),
    _react2.default.createElement('img', { src: '/images/fileUpload.png' })
  );
};

FileAttachment.defaultProps = defaultProps;
FileAttachment.propTypes = propTypes;

exports.default = FileAttachment;