import React from 'react'

const DisplayName = (props) =>(
    <div>
        {props.match.params.name}  
        {' '}
        {props.match.params.lastName}       
    </div>
)

export default DisplayName