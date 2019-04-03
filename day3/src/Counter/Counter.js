import React from 'react'
import Button from '@material-ui/core/Button'

class Counter extends React.Component {
    constructor(){
        super()
        this.state ={
            number: 10,
        }
    }
    render() {
        const inc =() =>{
            alert('Klik')
        }
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    variant={"contained"}
                    color={"secondary"}
                    onClick={inc}
                   
                >
                    +
                </Button>
            </div>
        )
    }
}
export default Counter