import { connect } from 'react-redux';
import { addMessage, onTyping } from '../actions';

import AddMessageComponent from '../components/AddMessageComponent';

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    },
    changeCurrentText: (text) => {
        dispatch(onTyping(text))
    }
})

const mapStateToProps = state => {
    return { currentText: state.currentText }
}

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent)
