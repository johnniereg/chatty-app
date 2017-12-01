import React, {Component} from 'react';
import Message from './Message.jsx';
import SysMessage from './SysMessage.jsx';

class MessageList extends Component {

  constructor(props) {
    super(props);
  }

  // Function to scroll view to latest chat message.
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messages = this.props.messages.map((message) => {
      if (message.type === 'chatMsg') {
        return <Message
          key={ message.id }
          username={ message.username }
          content={ message.content }
          userhex={ message.userhex }
        />
      }
      if (message.type === 'sysMsg') {
        return <SysMessage
          key={ message.id }
          content={ message.content }
        />
      }
    });

    return (
      <div>
        <main className="messages">
          { messages }
        </main>
        {/* Div to point scrolling function towards for chat renders. */}
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>  
      </div>
    );
  }
}

export default MessageList;
