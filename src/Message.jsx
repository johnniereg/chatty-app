import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");

    const { userhex, content, username } = this.props;

    // Allows us to manipulate the content passed down.
    let msgContent = content;

    let divStyle = {
      color: userhex
    }

    // Checks content string to see if it is a link with image file type.
    if (/(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png|jpeg)/.test(content)) {
      msgContent = (<img className="message-image" src={content}/>)
    }

    return (
        <div>
          <div className="message">
            <span className="message-username" style={ divStyle } > { username } </span>
            <span className="message-content"> { msgContent } </span>
          </div>
        </div>
    );
  }
}

export default Message;