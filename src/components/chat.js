import React, { Component } from 'react';
import Text from './text'
var md5 = require('md5');

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
        order: null,
        orders: []
    };
  }

  render() {

    return (
      <div>
        <div className="row chat-header">
           <div className="d-inline-block">
            <img className="rounded-circle border border-primary" src={`http://gravatar.com/avatar/${md5('cadu97@gmail.com')}?size=50`} />
          </div>
          <div className="d-inline-block align-middle">
            <h4>Jogador número 1!</h4>
          </div>
        </div>
        <div className="chat-body">
          <Text/>
          <Text/>
          <div className="text text-received">
            <p>Hello mundo!</p>
          </div>
          <div className="text text-sended">
            <p>Hello mundo!</p>
          </div>
          <div className="text text-sended sending">
            <p>Hello mundo!</p>
          </div>
        </div>
        <div className="chat-footer">
          <input type="text" placeholder="Type..." className="form-control"/>
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    );
  }
}

export default Chat