'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardExampleWithAvatar = function CardExampleWithAvatar() {
  return _react2.default.createElement(
    _Card.Card,
    null,
    _react2.default.createElement(_Card.CardHeader, { title: 'URL Avatar', subtitle: 'Subtitle', avatar: 'images/jsa-128.jpg' }),
    _react2.default.createElement(
      _Card.CardMedia,
      { overlay: _react2.default.createElement(_Card.CardTitle, { title: 'Overlay title', subtitle: 'Overlay subtitle' }) },
      _react2.default.createElement('img', { src: 'images/nature-600-337.jpg' })
    ),
    _react2.default.createElement(_Card.CardTitle, { title: 'Card title', subtitle: 'Card subtitle' }),
    _react2.default.createElement(
      _Card.CardText,
      null,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
    ),
    _react2.default.createElement(
      _Card.CardActions,
      null,
      _react2.default.createElement(_FlatButton2.default, { label: 'Action1' }),
      _react2.default.createElement(_FlatButton2.default, { label: 'Action2' })
    )
  );
};

exports.default = CardExampleWithAvatar;