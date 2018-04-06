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
        const linkHttpPattern   = /(https?:\/\/[^\s]+)/g;
        const linkWWWPattern    = /(www\.[^\s]+)/g;
        const tag               = '<a href="$1" target="_blank">$1</a>';

        if(linkHttpPattern.test(html)) {
            return html.replace(linkHttpPattern, tag)
        }

        if(linkWWWPattern.test(html)) {
            return html.replace(linkWWWPattern, tag)
        }

        return html;

    }

    const getMessage = (author, message) => {
        let html = buildMessage(author, message)
        html = linkFormatter(html);
        
        return {__html: html};
    }

    return (
        <div className={ klass }>
            <p className={"MessageText"} dangerouslySetInnerHTML={getMessage(author, message)}>
            </p>
        </div>
    )
}

MessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default MessageComponent