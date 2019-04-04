import React from 'react'

import List from '../List'


class Users extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
    }
    render() {
        return (
            <div>
                <List 
                users= {this.state.users}
                isLoading={this.state.isLoading}
                isError={this.state.isError}
                />
            </div>
        )
    }
}

export default Users
