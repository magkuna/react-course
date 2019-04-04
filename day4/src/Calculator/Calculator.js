import React from 'react'

class Calculator extends React.Component {
    state = {
        number1: 0,
        number2: 0,
        result: null
    }

    input1Change = (event) => {
        this.setState({ number1: Number( event.target.value) })
    }
    input2Change = (event) => {
        this.setState({  number2: Number( event.target.value) })
    }

    onButtonClickPlus = () => this.setState({
        result: this.state.number1 + this.state.number2
    })
    onButtonClickMinus = () => this.setState({
        result: this.state.number1 - this.state.number2
    })

    onButtonClickMulti = () => this.setState({
        result: this.state.number1 * this.state.number2
    })


    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.state.number1}
                        onChange={this.input1Change}
                    />
                    <input
                        value={this.state.number2}
                        onChange={this.input2Change}
                    />
                </div>
                <div>
                    {this.state.result}
                </div>
                <div>
                    <button
                        onClick={this.onButtonClickPlus}>
                        +
                    </button>
                    <button
                        onClick={this.onButtonClickMinus}>
                        -
                    </button>
                    <button
                        onClick={this.onButtonClickMulti}>
                        *
                    </button>
                </div>
            </div>
        )
    }
}


export default Calculator