import React from 'react'
import Multiply from "./Multiply"


const Add = (props) => (
    <div>
        <h2>
            Ich suma to
        </h2>
        {props.a + props.b}
        <Multiply
            a={props.a}
            b={props.b}
        />
    </div>
)

export default Add