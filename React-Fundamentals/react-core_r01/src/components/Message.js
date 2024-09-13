import React, { Component } from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
    // binding class constructor
    // this.changeMessage = this.changeMessage.bind(this)
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for registering!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* class property as arrow function */}
        {/* <button onClick={this.changeMessage}>Register</button> */}

        {/* Arrow function render */}
        <button onClick={()=>this.changeMessage()}>Register</button>

        {/*  binding class constructor */}
        {/* <button onClick={this.changeMessage}>Register</button> */}

        {/* binding in render menthod */}
        {/* <button onClick={this.changeMessage.bind(this)}>Register</button> */}

      </div>
    )
  }
}

export default Message