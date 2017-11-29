import React, { Component } from 'react';

// Takes in submission of new messages and adds to message array.
export const handleSubmit = function(content) {
    console.log(content);
    const newMessage = {
        id: (this.state.messages.length + 1),
        username: this.state.currentUser.name,
        content: content
    };
    const messages = this.state.messages.concat(newMessage);
    this.setState({
        messages: messages
    })
}

// Updates current user name when changed in form.
export const handleNameChange = function(name) {
    let newName = name
    if (newName === '') {
        newName = 'Anonymous';
    }
    this.setState({
        currentUser: { name: newName }
    })
}

// Listens for 'enter' and submits, then clears field.
export const getMessageContent = function(event) {
    let content = event.target.value;
    if (event.key === 'Enter') {
        this.props.handleSubmit(content);
        event.target.value = ''; // Clears out input field afterwards.
    }
}

// Update username when focus leaves username field.
export const getNewUserName = function(event) {
    let name = event.target.value;
    this.props.handleNameChange(name);
}