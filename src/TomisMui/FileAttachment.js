import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import AttachFileIcon from 'material-ui/svg-icons/editor/attach-file';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from '../TomisMui/IconButton';
import FileAttachmentTable from './helpers/FileAttachmentTable';

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
    const { renderFileList, onDelete } = this;
    const { files } = this.state;
    const { label } = this.props;
    return (
      <div>
        <h3>{label}</h3>
        <div style={{ fontSize: '12px' }}>Upload TSS Risk Assessment</div>
        <div style={{ display: 'flex' }}>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)} className="dropzone-tomis">
              <AttachFileIcon />
              <p>Click to select files to upload.</p>
            </Dropzone>
          </div>
          <FileAttachmentTable onDelete={onDelete} tableData={files} />
        </div>
      </div>
    );
  }
}

FileAttachment.defaultProps = defaultProps;
FileAttachment.propTypes = propTypes;

export default FileAttachment;
