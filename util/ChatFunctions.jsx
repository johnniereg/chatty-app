import React, { Component } from 'react';

// Takes in submission of new messages and adds to message array.
export const handleSubmit = function(content) {

    const newMessage = {
        type: 'chatMsg',
        username: this.state.currentUser.name,
        content: content
    };
    this.socket.send(JSON.stringify(newMessage));
}

// Updates current user name when changed in form.
export const handleNameChange = function(name) {
    let oldName = this.state.currentUser.name;
    let newName = name;

    if (newName === '') {
        newName = 'Anonymous';
    }
    
    const sysMessage = {
        type: 'sysMsg',
        oldName: oldName,
        newName: newName 
    }

    if (newName !== oldName) {
        this.socket.send(JSON.stringify(sysMessage));
        this.setState({
            currentUser: { name: newName }
        })
    }

}

// Listens for 'enter' and submits, then clears field.
export const getMessageContent = function(event) {
    let content = event.target.value;
    if (event.key === 'Enter') {
        if (content === '') {
            return;
        }
        this.props.handleSubmit(content);
        event.target.value = ''; // Clears out input field afterwards.
    }
}

// Update username when focus leaves username field.
export const getNewUserName = function(event) {
    let name = event.target.value;
    this.props.handleNameChange(name);
}

export const makeBlur = function(event) {
    if (event.key === 'Enter') {
        this.refs.message.focus();
    }

}