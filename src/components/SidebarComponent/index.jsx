import React from 'react';
import PropTypes from 'prop-types';

const SidebarComponent = ({users}) => (
    <aside id="sidebar">
        <h2 className="title">Users</h2>

        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

SidebarComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default SidebarComponent