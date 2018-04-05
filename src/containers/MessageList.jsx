import { connect } from 'react-redux';
import MessageListComponent from '../components/MessageListComponent';

export const MessageList = connect(state => ({
    messages: state.messages
}), {})(MessageListComponent)