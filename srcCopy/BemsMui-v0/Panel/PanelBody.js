import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';

const defaultProps = {
  registerCollapseRef: () => {}
};

const propTypes = {
  registerCollapseRef: PropTypes.func.isRequired
};

function getStyles(props, context) {
  const { cardText } = context.muiTheme;

  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor
    }
  };
}

class PanelBody extends Component {
  componentDidMount() {
    const { registerCollapseRef } = this.props;
    registerCollapseRef(this.collapseRef);
  }
  static keepProps = {};
  static collapseRef = null;

  static muiName = 'PanelBody';

  static propTypes = {
    /**
     * If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * Can be used to render elements inside the Card Text.
     */
    children: PropTypes.node,
    /**
     * Override the PanelBody color.
     */
    color: PropTypes.string,
    /**
     * If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      children,
      color, // eslint-disable-line no-unused-vars
      expandable, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign(styles.root, style);

    this.keepProps = _omit(other, 'registerCollapseRef');
    const { keepProps } = this;
    return (
      <div ref={ref => (this.collapseRef = ref)} {...keepProps} style={prepareStyles(rootStyle)}>
        {children}
      </div>
    );
  }
}

export default PanelBody;
