import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import { handleSubmit, handleNameChange } from '../util/ChatFunctions.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.socket = null;
    this.state = {
      currentUser: { name: 'Anonymous' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
    this.handleNameChange = handleNameChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log('componentDidMount <App />');

    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onopen = function(event) {
      console.log("Connected to server.");
    }

    this.socket.addEventListener('message', (msg) => {
      let messageObj = JSON.parse(msg.data);
      console.log(messageObj);
      this.setState({ messages: this.state.messages.concat(messageObj) });
    });
  }
  

  render(){
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>Chatty</a>
        </nav>
        <MessageList messages={ this.state.messages } />
        <ChatBar handleSubmit={ this.handleSubmit } handleNameChange={ this.handleNameChange } currentUser={ this.state.currentUser } />
      </div>
    );
  }
}

export default App;
