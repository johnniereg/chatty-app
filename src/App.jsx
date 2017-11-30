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
      messages: [],
      userHex: '#000000',
      clients: 0
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

    // @TODO separate concerns and refactor
    this.socket.addEventListener('message', (msg) => {
      let msgReceived = msg.data;
      let messageObj = JSON.parse(msgReceived);

      // Handle client count updates.
      if (messageObj.type === 'clients') {
        this.setState({ clients: messageObj.count })
        return;
      }

      // Handle hex color assignment.
      if (messageObj.type === 'hex-assign') {
        console.log('We got assigned color: ', messageObj.hex);
        this.setState({ userHex: messageObj.hex });
        return;
      }

      this.setState({ messages: this.state.messages.concat(messageObj) });
    });
  }
  

  render(){
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>jChat</a>
          <span className='navbar-brand total-clients'> Total users online: { this.state.clients } </span>
        </nav>
        <MessageList messages={ this.state.messages } />
        <ChatBar handleSubmit={ this.handleSubmit } handleNameChange={ this.handleNameChange } currentUser={ this.state.currentUser } />
      </div>
    );
  }
}

export default App;
