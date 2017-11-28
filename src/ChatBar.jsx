import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.getMessageContent = this.getMessageContent.bind(this);
    this.getNewUserName = this.getNewUserName.bind(this);
    this.state = {
      username: this.props.currentUser.name
    }
  }

  // Listens for 'enter' and submits, then clears field.
  getMessageContent(e) {
    let content = e.target.value;
    if (e.key === 'Enter'){
      this.props.handleSubmit(content);
      e.target.value=''; 
    }
  }

  // Update username when focus leaves username field.
  getNewUserName(e) {
    let name = e.target.value;
    this.props.handleNameChange(name);
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

