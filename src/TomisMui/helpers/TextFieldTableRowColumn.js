import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from '../../TomisMui/FlatButton';
import Popover from '../../TomisMui/Popover';

const setStateIsOpen = (isOpen, props, state) => {
  return { isOpen };
};

const initState = { isOpen: false };

const defaultProps = { isOpen: false };
const propTypes = { isOpen: PropTypes.bool.isRequired };

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

class TextFieldTableRowColumn extends Component {
  constructor(props) {
    super(props);
    const { idx, editIdx } = props;
    this.idx = idx;
    this.state = initState;
    this.popoverAnchor = null;
    this.handleClickToOpen = this.handleClickToOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    // this.handleUpdateJustification = this.handleUpdateJustification.bind(this);
    // this.handleSaveJustification = this.handleSaveJustification.bind(this);
  }

  componentDidMount() {
    const { isOpen, idx, editIdx } = this.props;
    if (idx === editIdx) {
      console.log('new idx=', idx, ', this.idx=', this.idx, ', editIdx=', editIdx);
      // this.setState(setStateIsOpen.bind(this, isOpen));
    }
  }
  componentWillReceiveProps(nextProps) {
    const { isOpen, idx, editIdx } = nextProps;
    console.log('new idx=', idx, ', this.idx=', this.idx, ', editIdx=', editIdx);
    if (idx === editIdx) {
      // this.setState(setStateIsOpen.bind(this, isOpen));
    }
  }

  handleClickToOpen() {
    console.log('handleClick');
    this.setState(setStateIsOpen.bind(this, true));
  }

  handleRequestClose() {
    this.setState(setStateIsOpen.bind(this, false));
  }

  render() {
    const { handleClickToOpen, handleRequestClose } = this;
    const { isOpen } = this.state;
    const { idx, children } = this.props;
    return (
      <div ref={ref => (this.popoverAnchor = ref)}>
        <div onClick={handleClickToOpen}>
          <div>VAL VAL VAL VAL</div>
        </div>
        <Popover
          open={isOpen}
          anchorEl={this.popoverAnchor}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestClose}
          animated={false}
        >
          <div className="editable-popover">
            <div>Is this working at all? idx={idx}</div>
            {children}
            <div className="flex-row">
              <FlatButton label="Cancel" primary={true} onClick={handleRequestClose} />
              <FlatButton label="Save" primary={true} onClick={handleRequestClose} />
            </div>
          </div>
        </Popover>
      </div>
    );
  }
}

TextFieldTableRowColumn.defaultProps = defaultProps;
TextFieldTableRowColumn.propTypes = propTypes;
export default TextFieldTableRowColumn;
