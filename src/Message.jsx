import React, {Component} from 'react';

class Message extends Component {
  render() {

    let { userhex, content, username } = this.props;

    // Define unique username colour.
    let divStyle = {
      color: userhex
    }

    // Checks content string to see if it is a link with image file type.
    if (/(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png|jpeg)/.test(content)) {
      content = (<img className="message-image" src={ content }/>)
    }

    return (
        <div>
          <div className="message">
            <span className="message-username" style={ divStyle } > { username } </span>
            <span className="message-content"> { content } </span>
          </div>
        </div>
    );
  }
}

export default Message;