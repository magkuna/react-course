import React from 'react'
import Error from './Loading'
import Loading from './Loading'
import NoLoaded from './NoLoaded'
import NoUsers from './NoUsers'
import Results from './Results'

class List extends React.Component {
    
   

    render() {
        return (
            <div>
                {
                    this.props.isError ?
                        //'Error'
                        <Error />
                        :
                        this.props.isLoading ?
                            //'Loading'
                            <Loading />
                            :
                            !this.props.users ?
                                // 'Data no loaded yet'
                                <NoLoaded />
                                :
                                this.props.users.length === 0 ?
                                //'No users found'
                                <NoUsers />
                                :
                                <Results 
                                data={this.props.users}
                                />
                }
            </div>
        )
    }
}


export default List