import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisButtonIcon from 'TomisApp/TomisButtonIcon';
import { getPreviewImage } from './fileAttachmentUtils';
import Dropzone from 'react-dropzone';
import TomisFontIcon from 'TomisApp/TomisFontIcon';

const initState = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px'
};

const propTypes = {
    files: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

class FileAttachmentDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
        this.delRow = this.delRow.bind(this);
    }

    delRow(idx, evt) {
        evt.stopPropagation();
        const { onDelete } = this.props;
        onDelete(idx);
    }

    render() {
        const { delRow } = this;
        const { height, fixedHeader, fixedFooter, selectable, multiSelectable, showCheckboxes, deselectOnClickaway, showRowHover, stripedRows } = this.state;
        const { files, onDrop } = this.props;
        return (
            <ul className="file-attachment-list">
                <li className="file-attachment-block upload">
                    <Dropzone className="file-attachment-upload" onDrop={onDrop}>
                        <div>Click to</div>
                        <div>Select File(s)</div>
                        <TomisFontIcon name="attach_file" className="file-attachment-icon" style={{ width: '36px', height: '36px' }} />
                    </Dropzone>
                </li>
                {files.map((file, idx) => {
                    return (
                        <li key={idx} className="file-attachment-block">
                            <div className="delete-icon">
                                <TomisButtonIcon
                                    style={{ padding: 0, width: '24px', height: '24px' }}
                                    tooltip="Delete"
                                    tooltipPosition="bottom-left"
                                    onTouchTap={delRow.bind(this, idx)}
                                >
                                    <TomisFontIcon name="delete" />
                                </TomisButtonIcon>
                            </div>
                            {getPreviewImage(file)}
                            <div className="filename" title={file.name}>
                                {file.name}
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default FileAttachmentDisplay;
