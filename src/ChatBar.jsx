import React, {Component} from 'react';
import { getMessageContent, getNewUserName, makeBlur } from '../util/ChatFunctions.jsx';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.name
    }
    this.getMessageContent = getMessageContent.bind(this);
    this.getNewUserName = getNewUserName.bind(this);
    this.makeBlur = makeBlur.bind(this);
  }
  
  render() { 

    if (this.state.username === 'Anonymous') {
      // Keep username field empty for anonymous users.
      return (
        <footer className="chatbar">
          <input className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            onBlur={this.getNewUserName} 
            onKeyPress={this.makeBlur} 
          />
          <input className="chatbar-message" 
            ref="message" 
            placeholder="Type a message and hit ENTER" 
            onKeyPress={this.getMessageContent} 
          />
        </footer>
      )
    } else {
      // Put current username in name field for non-anonymous users.
      return (
        <footer className="chatbar">
          <input className="chatbar-username" 
            defaultValue={this.state.username} 
            placeholder="Your Name (Optional)"  
            onBlur={ this.getNewUserName } 
            onKeyPress={ this.makeBlur } 
          />
          <input className="chatbar-message" 
            ref="message" 
            placeholder="Type a message and hit ENTER" 
            onKeyPress={ this.getMessageContent } 
          />
        </footer>
      );
    }
    
  }
}

export default ChatBar;

