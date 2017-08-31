import React, { Component } from 'react';

class App extends Component {

  render() {
    const content = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>);
    return content;
  }
}

export default App;