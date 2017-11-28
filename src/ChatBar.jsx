import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.getMessageContent = this.getMessageContent.bind(this);
    this.getNewUserName = this.getNewUserName.bind(this);
  }

  getMessageContent(e) {
    let content = e.target.value;
    if (e.key === 'Enter'){
      this.props.handleSubmit(content); 
    }
  }

  getNewUserName(e) {
    let name = e.target.value;
    if (e.key === 'Enter'){
      this.props.handleNameChange(name);
    }
  }


  render() {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={ this.props.currentUser.name } onKeyPress={ this.getNewUserName } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.getMessageContent } />
      </footer>
    );
  }
}
export default ChatBar;

