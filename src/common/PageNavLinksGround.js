import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageNavLinksGroundRender from 'common/PageNavLinksGroundRender';

const defaultProps = {
  pageTitle: 'Information'
};
const propTypes = {
  pageTitle: PropTypes.string.isRequired
};

class PageNavLinksGround extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pageTitle } = this.props;
    return <PageNavLinksGroundRender {...this.props} />;
  }
}

PageNavLinksGround.defaultProps = defaultProps;
PageNavLinksGround.propTypes = propTypes;
export default PageNavLinksGround;
