'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GridList = require('material-ui/GridList');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

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
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)'
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
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
var GridListExampleSingleLine = function GridListExampleSingleLine() {
  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      _GridList.GridList,
      { style: styles.gridList, cols: 2.2 },
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          _GridList.GridTile,
          {
            key: tile.img,
            title: tile.title,
            actionIcon: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_starBorder2.default, { color: 'rgb(0, 188, 212)' })
            ),
            titleStyle: styles.titleStyle,
            titleBackground: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    )
  );
};

exports.default = GridListExampleSingleLine;