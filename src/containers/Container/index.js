import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Container extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{height:'100%'}}>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Container;