import React from 'react';
import PropTypes from 'prop-types';

import './MessageComponent.scss'

const MessageComponent = ({message = '', author = ''}) => {
    let klass = author.toLowerCase() === 'me' ? 'MessageItem MessageItemMe' : 'MessageItem';

    return (
        <li className={ klass }>
            <p className={"MessageText"}>
                <i>{author}:</i> {message}
            </p>
        </li>
    )
}

MessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default MessageComponent