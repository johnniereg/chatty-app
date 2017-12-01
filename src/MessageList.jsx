import React, {Component} from 'react';
import Message from './Message.jsx';
import SysMessage from './SysMessage.jsx';

class MessageList extends Component {

  constructor(props) {
    super(props);
  }

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

    console.log("Rendering <MessageList/>");

    return (
      <div>
        <main className="messages">
          { messages }
        </main>
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>  
      </div>
    );
  }
}

export default MessageList;
