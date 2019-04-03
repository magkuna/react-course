import React from 'react'

class LifeCycle extends React.Component {

   // MOUNTING

  constructor() {
    super()

    this.state = {
      number: 0,
    }

    console.log('constructor')
  }

  //  deprecated!
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log('--- ---- --- --- --- ---')
  }

   // UPDATING

  //  deprecated!
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')

    console.log('Current props ', this.props)
    console.log('Next props ', nextProps)
    console.log('Current state ', this.state)
    console.log('Next state ', nextState)

    return true
  }

  //  deprecated!
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  // UN-MOUNTING

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  // MOUNTING & UPDATING

  render() {
    console.log('render')

    return (
      <div>
        LifeCycle
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Change state!
        </button>
      </div>
    )
  }
}
export default LifeCycle