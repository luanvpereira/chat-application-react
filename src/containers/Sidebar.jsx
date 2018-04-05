import { connect } from 'react-redux';
import SidebarComponent from '../components/SidebarComponent';

export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent)