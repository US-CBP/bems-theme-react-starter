import React, { PropTypes } from 'react';

const defaultProps = { label: 'Attachments' };

const propTypes = { label: PropTypes.oneOfType([(PropTypes.node, PropTypes.string)]) };

const FileAttachment = ({ ...props }) => {
  const { label } = props;
  return (
    <div>
      <h3>{label}</h3>
      <img src="/images/fileUpload.png" />
    </div>
  );
};

FileAttachment.defaultProps = defaultProps;
FileAttachment.propTypes = propTypes;

export default FileAttachment;
