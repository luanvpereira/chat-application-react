import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MessageComponent from '../MessageComponent'

class MessageListComponent extends React.Component {
    componentDidUpdate () {
        this.scrollToBottom();
    }

    scrollToBottom() {
        const messagesList = this.refs.messagesList;
        const messagesContainer = this.refs.messagesContainer;

        const messagesContainerRect = messagesContainer.getBoundingClientRect();
        const messagesListRect = messagesList.getBoundingClientRect();
        const diff = (messagesListRect.height - messagesContainerRect.height);
        const padding = 30;
        const newScrollPosition = messagesListRect.height > messagesContainerRect.height ? diff + padding : 0;
        messagesContainer.scrollTop = newScrollPosition;
    }

    render() {  
        const { messages } = this.props;

        return (
            <section id="messages-list">
                <h2 className="title">Messages list</h2>
    
                <div className="messagesContainer" ref="messagesContainer">
                    <div className="messagesList" ref="messagesList">
                        {messages.map(message => (
                            <MessageComponent
                                key={message.id}
                                {...message}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

MessageListComponent.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessageListComponent