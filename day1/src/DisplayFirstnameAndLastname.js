import React from 'react'

const DisplayFirstnameAndLastname = (props) => {


console.log(props)
return(
    <div>
        {props.name} {props.lastName} 
    </div>
)
}

export default DisplayFirstnameAndLastname


