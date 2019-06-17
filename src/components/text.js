import React, { Component } from 'react';
var md5 = require('md5');

class Text extends Component {

  constructor(props) {
    super(props);
    this.state = {
        order: null,
        orders: []
    };
  }

  render() {

    return (
      <div className="text text-received">
        <p>Hello mundo!</p>
      </div>
    );
  }
}

export default Text