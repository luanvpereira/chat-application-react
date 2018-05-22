import React from 'react';
import PropTypes from 'prop-types';
import './AddMessage.scss';

class AddMessageComponent extends React.Component {
    componentDidMount () {
        this.forceFocusInInput();
    }

    forceFocusInInput = () => {
        this.refs.messageInput.focus();
    }

    changeInputHeight (e, input) {
        const messageInputStyle = this.refs.messageInput.style;
        let currentHeight = '';

        if (input.value.trim().length > 0) {
            const { height } = this.refs.fakeMessage.getBoundingClientRect()
            currentHeight = height;
        } else {
            currentHeight = 0;
        }

        messageInputStyle.height = currentHeight ? currentHeight + 'px' : ''
    }

    onEnter (e, input) {
        if(input.value.trim().length > 0) {
            this.props.dispatch(input.value.trim(), 'ME')
        }

        input.value = '';
    }

    handleOnKeypress = (e) => {
        const input = e.currentTarget;

        if (e.key === 'Enter') this.onEnter(e, input)

        this.props.changeCurrentText(input.value)
        this.changeInputHeight(e, input)
    }

    render() {
        return (
            <section className="NewMessage" onClick={ this.forceFocusInInput.bind(this) }>
                <div className="NewMessageContainer" ref="container">
                    <textarea
                        rows="1"
                        className="NewMessageInput"
                        placeholder={"Write here..."}
                        onKeyUp={ this.handleOnKeypress.bind(this) }
                        ref="messageInput"
                    ></textarea>
                    <div ref="fakeMessage">
                        {this.props.currentText}
                    </div>
                </div>
            </section>
       )
    }
}

AddMessageComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    changeCurrentText: PropTypes.func.isRequired,
    currentText: PropTypes.string
}

export default AddMessageComponent