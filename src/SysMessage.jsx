import React, { Component } from 'react';

class SysMessage extends Component {
    render() {
        console.log("Rendering <SysMessage/>");
        return (
            <div>
                <div className="message system">
                    { this.props.content }
                </div>
            </div>
        );
    }
}

export default SysMessage;