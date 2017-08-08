import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileAttachmentDisplay from './helpers/FileAttachmentDisplay';
import TomisHeading from 'TomisApp/TomisHeading';

const setStateAddFiles = (newFiles, state, props) => {
  const { files } = state;
  return { files: files.concat(newFiles) };
};

const setStateDeleteFile = (idx, state, props) => {
  const { files } = state;
  return { files: [...files.slice(0, idx), ...files.slice(idx + 1)] };
};

const defaultProps = { label: 'Attachments' };
const propTypes = { label: PropTypes.oneOfType([(PropTypes.node, PropTypes.string)]) };

class FileAttachment extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  state = {
    files: []
  };

  onDrop(files) {
    this.setState(setStateAddFiles.bind(this, files));
  }

  onDelete(idx) {
    this.setState(setStateDeleteFile.bind(this, idx));
  }

  render() {
    const { renderFileList, onDelete, onDrop } = this;
    const { files } = this.state;
    const { label } = this.props;
    return (
      <div>
        <TomisHeading label="Attachments" />
      {/* <div className="file-attachment-label">{label}</div> */}
      <br />
      <br />
        <FileAttachmentDisplay onDrop={onDrop} onDelete={onDelete} files={files} />
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

FileAttachment.defaultProps = defaultProps;
FileAttachment.propTypes = propTypes;

export default FileAttachment;
