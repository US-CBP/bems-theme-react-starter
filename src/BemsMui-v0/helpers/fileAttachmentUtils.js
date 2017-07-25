import React from 'react';

export const getPreviewImage = file => {
  if (file.type.indexOf('image') >= 0) {
    return <img src={file.preview} style={{ width: '90px', height: 'auto', maxHeight: '60px' }} />;
  } else {
    return <img src={getImgSrc(file)} style={{ width: '60px', height: '60px' }} />;
  }
};

const imgSrcBase = 'images/file-attachment';

const getImgSrc = file => {
  const { name, type } = file;
  if (name.indexOf('.doc') >= 0) {
    return `${imgSrcBase}/msWordDoc.png`;
  } else if (name.indexOf('.xls') >= 0) {
    return `${imgSrcBase}/msExcelDoc.png`;
  } else if (type.indexOf('video') >= 0) {
    return `${imgSrcBase}/videoClip.png`;
  } else if (type.indexOf('audio') >= 0) {
    return `${imgSrcBase}/audioClip.png`;
  } else if (name.indexOf('.pdf') >= 0) {
    return `${imgSrcBase}/adobePdfDoc.png`;
  } else if (name.indexOf('.ppt') >= 0) {
    return `${imgSrcBase}/msPowerPointDoc.png`;
  } else if (name.indexOf('.zip') >= 0) {
    return `${imgSrcBase}/winZip.png`;
  } else if (name.indexOf('.msg') >= 0) {
    return `${imgSrcBase}/msOutlookDoc.png`;
  } else {
    return `${imgSrcBase}/unhandledFileType.png`;
  }
};
