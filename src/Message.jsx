import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");

    const { userhex, content, username } = this.props;

    let msgContent = content;

    let divStyle = {
      color: userhex
    }

    if (/(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/.test(content)) {
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