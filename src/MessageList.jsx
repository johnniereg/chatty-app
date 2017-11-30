import React, {Component} from 'react';
import Message from './Message.jsx';
import SysMessage from './SysMessage.jsx';

class MessageList extends Component {

  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default MessageList;
