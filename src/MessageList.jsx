import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    const messages = this.props.messages.map((message) => {
      return <Message
        key={ message.id }
        username={ message.username }
        content={ message.content }
        />
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
