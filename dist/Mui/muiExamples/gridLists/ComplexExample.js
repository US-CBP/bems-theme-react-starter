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
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
};

var tilesData = [{
  img: 'images/grid-list/00-52-29-429_640.jpg',
  title: 'Breakfast',
  author: 'jill111',
  featured: true
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
  author: 'fancycrave1',
  featured: true
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
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
var GridListExampleComplex = function GridListExampleComplex() {
  return _react2.default.createElement(
    'div',
    { style: styles.root },
    _react2.default.createElement(
      _GridList.GridList,
      { cols: 2, cellHeight: 200, padding: 1, style: styles.gridList },
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          _GridList.GridTile,
          {
            key: tile.img,
            title: tile.title,
            actionIcon: _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_starBorder2.default, { color: 'white' })
            ),
            actionPosition: 'left',
            titlePosition: 'top',
            titleBackground: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)',
            cols: tile.featured ? 2 : 1,
            rows: tile.featured ? 2 : 1
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    )
  );
};

exports.default = GridListExampleComplex;