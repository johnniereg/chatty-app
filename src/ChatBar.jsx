import React, {Component} from 'react';
import { getMessageContent, getNewUserName } from '../util/ChatFunctions.jsx';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.getMessageContent = getMessageContent.bind(this);
    this.getNewUserName = getNewUserName.bind(this);
    this.state = {
      username: this.props.currentUser.name
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={ this.state.username } onBlur={ this.getNewUserName } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.getMessageContent } />
      </footer>
    );
  }
}

export default ChatBar;

