import React from 'react'
import Error from './Loading'
import Loading from './Loading'
import NoLoaded from './NoLoaded'
import NoUsers from './NoUsers'
import Results from './Results'

const List = (props) => (

    <div>
        {
            props.isError ?
                //'Error'
                <Error />
                :
                props.isLoading ?
                    //'Loading'
                    <Loading />
                    :
                    !props.users ?
                        // 'Data no loaded yet'
                        <NoLoaded />
                        :
                        props.users.length === 0 ?
                            //'No users found'
                            <NoUsers />
                            :
                            <Results
                                data={props.users}
                            />
        }
    </div>
)


export default List