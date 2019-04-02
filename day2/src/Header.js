import React from 'react'
import Name from './Name'

const Header = (props) => (
    <div>
        <h1>
            Nazywam się
        </h1>
        <Name 
        name={props.firstName + ' ' + props.lastName}/>
    </div>
)

export default Header
