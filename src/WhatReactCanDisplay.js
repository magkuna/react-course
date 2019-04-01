import React from 'react'

const reactCanDisplayString = 'Ala ma kota'
const reactCanDisplayNumber = 100

const reactCantDisplayBoolean = true
const reactCantDisplayNull = null
const reactCantDisplayUndefined = undefined

const reactCanDisplayFunctionCall = () => 'Ala ma psa'
const reactCanDisplayArray = ['Ala', 'Ola', 'Ela']
const reactCanDisplayReactElement = <b>Gruba Ala</b>

/*const reactThrowsErrorWhenDisplayObject = {
    name: 'Magda',
}*/

const WhatReactCanDisplay = (props) => (
    <div>
        <h4>Strings:</h4>
        <p>
            {reactCanDisplayString}
        </p>
        <h4>Numbers:</h4>
        <p>
            {reactCanDisplayNumber}
        </p>
        <h4>Boolean:</h4>
        <p>
            {reactCantDisplayBoolean}
        </p>
        <h4>Null:</h4>
        <p>
            {reactCantDisplayNull}
        </p>
        <h4>Undefined:</h4>
        <p>
            {reactCantDisplayUndefined}
        </p>
        <h4>Function:</h4>
        <p>
            {reactCanDisplayFunctionCall}
        </p>
        <h4>Function call:</h4>
        <p>
            {reactCanDisplayFunctionCall()}
        </p>
        <h4>Array:</h4>
        <p>
            {reactCanDisplayArray}
        </p>
        <h4>Element:</h4>
        <p>
            {reactCanDisplayReactElement}
        </p>
        <h4>Array mapping:</h4>
        <p>
            {reactCanDisplayArray.map(
                (element, index) =>
                    <div
                        key={index + element}
                    >
                        {element}
                    </div>
            )
            }
        </p>
        <h4>Array mapping:</h4>
        <ul>
            {reactCanDisplayArray.map(
                (element, index) => (
                    <li
                        key={index + element}
                    >
                        {element}
                    </li>
                )
            )
            }
           {/* <h4>Object:</h4>
        <p>
            {reactThrowsErrorWhenDisplayObject}
        </p>*/}
        </ul>
    </div>

)


export default WhatReactCanDisplay