import React from 'react';
import PropTypes from 'prop-types'
import MessageComponent from '../MessageComponent'

const MessageListComponent = ({messages}) => (
    <section id="messages-list">
        <h2 className="title">Messages list</h2>

        <ul>
            {messages.map(message => (
                <MessageComponent
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
)

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