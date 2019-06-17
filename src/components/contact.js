import React, { Component } from 'react';
var md5 = require('md5');

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        order: null,
        orders: []
    };
  }

  render() {

    return (
      <div className="contact">
        <div className="d-inline-block">
          <img className="rounded-circle border border-primary" src={`http://gravatar.com/avatar/${md5('cadu97@gmail.com')}?size=45`} />
        </div>
        <div className="d-inline-block align-middle">
          <h4>Jogador número 1!</h4>
        </div>
      </div>
    );
  }
}

export default Contact