import React from 'react'
import Add from './Add'
import Divide from './Divide'
import Subtract from './Subtract'

const Calculator = (props) => (
    <div>
        <h1>
            Liczby to
        </h1>
        {props.a}{" i "}{props.b}
        <Add
            a={props.a}
            b={props.b}
        />
        <Divide
            a={props.a}
            b={props.b} />
        <Subtract
            a={props.a}
            b={props.b}
        />
    </div>
)





export default Calculator