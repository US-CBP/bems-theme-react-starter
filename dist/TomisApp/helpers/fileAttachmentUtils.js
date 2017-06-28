'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreviewImage = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPreviewImage = exports.getPreviewImage = function getPreviewImage(file) {
  if (file.type.indexOf('image') >= 0) {
    return _react2.default.createElement('img', { src: file.preview, style: { width: '90px', height: 'auto', maxHeight: '60px' } });
  } else {
    return _react2.default.createElement('img', { src: getImgSrc(file), style: { width: '60px', height: '60px' } });
  }
};

var imgSrcBase = 'images/file-attachment';

var getImgSrc = function getImgSrc(file) {
  var name = file.name,
      type = file.type;

  if (name.indexOf('.doc') >= 0) {
    return imgSrcBase + '/msWordDoc.png';
  } else if (name.indexOf('.xls') >= 0) {
    return imgSrcBase + '/msExcelDoc.png';
  } else if (type.indexOf('video') >= 0) {
    return imgSrcBase + '/videoClip.png';
  } else if (type.indexOf('audio') >= 0) {
    return imgSrcBase + '/audioClip.png';
  } else if (name.indexOf('.pdf') >= 0) {
    return imgSrcBase + '/adobePdfDoc.png';
  } else if (name.indexOf('.ppt') >= 0) {
    return imgSrcBase + '/msPowerPointDoc.png';
  } else if (name.indexOf('.zip') >= 0) {
    return imgSrcBase + '/winZip.png';
  } else if (name.indexOf('.msg') >= 0) {
    return imgSrcBase + '/msOutlookDoc.png';
  } else {
    return imgSrcBase + '/unhandledFileType.png';
  }
};