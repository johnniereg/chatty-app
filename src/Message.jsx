import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");

    const { userhex } = this.props;

    let divStyle = {
      color: userhex
    }

    return (
        <div>
          <div className="message">
            <span className="message-username" style={divStyle} > { this.props.username } </span>
            <span className="message-content"> {this.props.content } </span>
          </div>
        </div>
    );
  }
}

export default Message;