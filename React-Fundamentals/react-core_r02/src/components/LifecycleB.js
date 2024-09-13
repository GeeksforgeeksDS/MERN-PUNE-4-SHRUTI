import React, { Component } from 'react'
import LifecycleC from './LifeCycle'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Alizeh'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleB componentDidUpdate')
	}

  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB
        <LifecycleC />
      </div>
    )
  }
}

export default LifecycleB