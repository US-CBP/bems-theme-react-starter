import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const defaultProps = { label: 'Attachments' };

const propTypes = { label: PropTypes.oneOfType([(PropTypes.node, PropTypes.string)]) };

const FileAttachment = ({ ...props }) => {
  const { label } = props;
  return (
    <div>
      <h3>{label}</h3>
      <div style={{fontSize: '12px'}}>Upload TSS Risk Assessment</div>
      <img src="/images/fileUpload.png" />
    </div>
  );
};

FileAttachment.defaultProps = defaultProps;
FileAttachment.propTypes = propTypes;

export default FileAttachment;
