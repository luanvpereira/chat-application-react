import React from 'react';
import PropTypes from 'prop-types';

import './MessageComponent.scss'

const MessageComponent = ({message = '', author = ''}) => {
    let klass = author.toLowerCase() === 'me' ? 'MessageItem MessageItemMe' : 'MessageItem';

    const buildMessage = (author, message) => {
        return `
            <i>${author}:</i> ${message}
        `;
    }

    const linkFormatter = (html) => {
        const linkPattern = /(https?:\/\/[^\s]+)/g;
        return html.replace(linkPattern, '<a href="$1" target="_blank">$1</a>')
    }

    const getMessage = (author, message) => {
        let html = buildMessage(author, message)
        html = linkFormatter(html);
        
        return {__html: html};
    }

    return (
        <li className={ klass }>
            <p className={"MessageText"} dangerouslySetInnerHTML={getMessage(author, message)}>
            </p>
        </li>
    )
}

MessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default MessageComponent