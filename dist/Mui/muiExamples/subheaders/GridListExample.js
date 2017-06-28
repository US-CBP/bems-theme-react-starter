'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GridList = require('material-ui/GridList');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _starBorder = require('material-ui/svg-icons/toggle/star-border');

var _starBorder2 = _interopRequireDefault(_starBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
};

var tilesData = [{
  img: 'images/grid-list/00-52-29-429_640.jpg',
  title: 'Breakfast',
  author: 'jill111'
}, {
  img: 'images/grid-list/burger-827309_640.jpg',
  title: 'Tasty burger',
  author: 'pashminu'
}, {
  img: 'images/grid-list/camera-813814_640.jpg',
  title: 'Camera',
  author: 'Danson67'
}, {
  img: 'images/grid-list/morning-819362_640.jpg',
  title: 'Morning',
  author: 'fancycrave1'
}, {
  img: 'images/grid-list/hats-829509_640.jpg',
  title: 'Hats',
  author: 'Hans'
}, {
  img: 'images/grid-list/honey-823614_640.jpg',
  title: 'Honey',
  author: 'fancycravel'
}, {
  img: 'images/grid-list/vegetables-790022_640.jpg',
  title: 'Vegetables',
  author: 'jill111'
}, {
  img: 'images/grid-list/water-plant-821293_640.jpg',
  title: 'Water plant',
  author: 'BkrmadtyaKarki'
}];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
var GridListExampleSimple = function GridListExampleSimple() {
  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      _GridList.GridList,
      { cellHeight: 180, style: styles.gridList },
      _react2.default.createElement(
        _Subheader2.default,
        null,
        'December'
      ),
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          _GridList.GridTile,
          {
            key: tile.img,
            title: tile.title,
            subtitle: _react2.default.createElement(
              'span',
              null,
              'by ',
              _react2.default.createElement(
                'b',
                null,
                tile.author
              )
            ),
            actionIcon: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_starBorder2.default, { color: 'white' })
            )
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    )
  );
};

exports.default = GridListExampleSimple;