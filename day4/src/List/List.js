import React from 'react'
import Error from './Loading'
import Loading from './Loading'
import NoLoaded from './NoLoaded'
import NoUsers from './NoUsers'
import Results from './Results'

class List extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api')
            .then(r => r.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                {
                    this.state.isError ?
                        //'Error'
                        <Error />
                        :
                        this.state.isLoading ?
                            //'Loading'
                            <Loading />
                            :
                            !this.state.users ?
                                // 'Data no loaded yet'
                                <NoLoaded />
                                :
                                this.state.users.length === 0 ?
                                //'No users found'
                                <NoUsers />
                                :
                                <Results 
                                data={this.state.users}
                                />
                }
            </div>
        )
    }
}
export default List