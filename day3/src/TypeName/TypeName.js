import React from 'react'

class TypeName extends React.Component {
  state = {
    name: 'Ala',
  }

  nameChangeHandler = (event) => this.setState({
    name: event.target.value,
  })

  buttonClickHandler = () => this.setState({
    name: 'Ala ma kota',
  })

  render() {
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>

        <button
          onClick={this.buttonClickHandler}
        >
          Type 'Ala ma kota'
        </button>

        <input 
          value={this.state.name}
          onChange={this.nameChangeHandler}
        />
      </div>
    )
  }
}

export default TypeName