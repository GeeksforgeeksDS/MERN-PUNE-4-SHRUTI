import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    const {UserName }  = this.props
    console.log('Regular Comp render')
    return (
      <div>
        Regular Component {UserName}
      </div>
    )
  }
}

export default RegComp