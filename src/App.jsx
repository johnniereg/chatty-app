import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import { handleSubmit, handleNameChange } from '../util/ChatFunctions.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = null;
    this.state = {
      currentUser: { name: 'Anonymous' },
      messages: [],
      userHex: '#000000',
      clients: 0
    };
    this.handleNameChange = handleNameChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  componentDidMount(){
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = function(event) {
      console.log("Connected to server.");
    }

    // Client message listener.
    this.socket.addEventListener('message', (msg) => {
      let messageObj = JSON.parse(msg.data);

      // Handle client count updates.
      if (messageObj.type === 'clients') {
        this.setState({ clients: messageObj.count })
        return;
      }

      // Handle hex color assignment.
      if (messageObj.type === 'hex-assign') {
        this.setState({ userHex: messageObj.hex });
        return;
      }

      // Handle system messages and user messages.
      this.setState({ messages: this.state.messages.concat(messageObj) });
    });
  }
  

  render(){

    const { clients, messages, currentUser } = this.state;

    return (
      <div>
        <NavBar clients={ clients } />
        <MessageList messages={ messages } />
        <ChatBar handleSubmit={ this.handleSubmit } handleNameChange={ this.handleNameChange } currentUser={ currentUser } />
      </div>
    );
  }
}

export default App;
