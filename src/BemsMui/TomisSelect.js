import React from 'react';
import Select from 'react-select';

export default class TomisSelect extends Select {
  constructor(props) {
    super(props);
    // this.renderOuter = this.renderOuter.bind(this);
  }

  renderOuter = (options, valueArray, focusedOption) => {
    console.log('TomisSelect renderOuter');
    let menu = this.renderMenu(options, valueArray, focusedOption);
    if (!menu) {
      return null;
    }

    return (
      <div ref={ref => this.menuContainer = ref} className="Select-menu-outer" style={this.props.menuContainerStyle}>
        <div
          ref={ref => this.menu = ref}
          role="listbox"
          className="Select-menu"
          id={this._instancePrefix + '-list'}
          style={this.props.menuStyle}
          onScroll={this.handleMenuScroll}
          onMouseDown={this.handleMouseDownOnMenu}
        >
          {menu}
        </div>
      </div>
    );
  };
}
