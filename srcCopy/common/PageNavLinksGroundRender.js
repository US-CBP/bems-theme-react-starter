import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  pageTitle: 'Information'
};
const propTypes = {
  pageTitle: PropTypes.string.isRequired
};

class PageNavLinksGroundRender extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pageTitle } = this.props;
    return (
      <div>
        <br />
        <div className="nav-bar">
          <div className="nav-bar-top display-button-bar">
            <div className="nav-bar-item first">
              <a className="nav-bar-link" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                {pageTitle}
              </a>
            </div>
            <div className="nav-bar-item">
              <div>
                <div className="nav-bar-item-header">Planning</div>
                <div className="mission-list">
                  <a className="nav-bar-link" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    Planning Details
                  </a>
                </div>
              </div>
            </div>
            {/*  <div className="nav-bar-item">
              <a className="nav-bar-link" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Executed/Canceled
              </a>
            </div> */}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

PageNavLinksGroundRender.defaultProps = defaultProps;
PageNavLinksGroundRender.propTypes = propTypes;
export default PageNavLinksGroundRender;
