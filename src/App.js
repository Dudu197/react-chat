import React, {Component} from 'react';
import background from './images/background.png';
import Contact from './components/contact'
import Text from './components/text'
import Chat from './components/chat'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
var md5 = require('md5');

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 contacts">
            <div className="contacts-header">
              <div className="d-inline-block">
                <img className="rounded-circle border border-primary" src={`http://gravatar.com/avatar/${md5('cadu97@gmail.com')}?size=45`} />
              </div>
              <div className="d-inline-block align-middle">
                <h4>Jogador número 1!</h4>
              </div>
            </div>
            <div className="contacts-body">
              <Contact/>
              <Contact/>
              <Contact/>
            </div>
          </div>
          <div className="col-md-8 chat">
            <Chat/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
