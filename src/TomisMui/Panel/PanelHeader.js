import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';

function getStyles(props, context) {
  const { card } = context.muiTheme;

  return {
    root: {
      padding: 16,
      fontWeight: card.fontWeight,
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'normal',
      paddingRight: '90px'
    },
    title: {
      color: props.titleColor || card.titleColor,
      display: 'block',
      fontSize: 15,
      flex: 1,
      fontWeight: 400
    },
    subtitle: {
      color: props.subtitleColor || card.subtitleColor,
      display: 'block',
      fontSize: 14
    }
  };
}

class PanelHeader extends Component {
  static muiName = 'CardHeader';

  static propTypes = {
    /**
     * If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * Can be used to render elements inside the Card Header.
     */
    children: PropTypes.node,
    /**
     * Can be used to pass a closeIcon if you don't like the default expandable close Icon.
     */
    closeIcon: PropTypes.node,
    /**
     * If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * Can be used to pass a openIcon if you don't like the default expandable open Icon.
     */
    openIcon: PropTypes.node,
    /**
     * If true, this card component will include a button to expand the card.
     */
    showExpandableButton: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Can be used to render a subtitle in Card Header.
     */
    subtitle: PropTypes.node,
    /**
     * Override the subtitle color.
     */
    subtitleColor: PropTypes.string,
    /**
     * Override the inline-styles of the subtitle.
     */
    subtitleStyle: PropTypes.object,
    /**
     * Override the inline-styles of the text.
     */
    textStyle: PropTypes.object,
    /**
     * Can be used to render a title in Card Header.
     */
    title: PropTypes.node,
    /**
     * Override the title color.
     */
    titleColor: PropTypes.string,
    /**
     * Override the inline-styles of the title.
     */
    titleStyle: PropTypes.object
  };

  static defaultProps = {};

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      children,
      closeIcon, // eslint-disable-line no-unused-vars
      expandable, // eslint-disable-line no-unused-vars
      openIcon, // eslint-disable-line no-unused-vars
      showExpandableButton, // eslint-disable-line no-unused-vars
      style,
      subtitle,
      subtitleColor, // eslint-disable-line no-unused-vars
      subtitleStyle,
      textStyle,
      title,
      titleColor, // eslint-disable-line no-unused-vars
      titleStyle,
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <div {...other} style={prepareStyles(Object.assign(styles.root, style))}>
        <div style={prepareStyles(Object.assign(styles.text, textStyle))}>
          <span style={prepareStyles(Object.assign(styles.title, titleStyle))}>
            {title}
          </span>
          {children}
        </div>
      </div>
    );
  }
}

export default PanelHeader;
