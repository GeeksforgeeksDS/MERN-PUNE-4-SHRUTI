import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    const {name }  = this.props
    console.log('Pure Comp render')
    return (
      <div>
        Pure Component {name}
      </div>
    )
  }
}

export default PureComp