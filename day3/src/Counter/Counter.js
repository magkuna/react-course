import React from 'react'
import Button from '@material-ui/core/Button'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 10,
        }
    }


    inc = () =>
        this.setState({ number: this.state.number + 1 })

    dec = () =>
        this.setState({ number: this.state.number - 1 })

render() {
    return (
        <div class="counter">
            <h1>
                {this.state.number}
            </h1>
            <Button
                variant={"contained"}
                color={"secondary"}
                onClick={this.inc}
            >
                +
                </Button>
            <Button
                variant={"contained"}
                color={"primary"}
                onClick={this.dec}
            >
                -
                </Button>
        </div>
    )
}
}
export default Counter