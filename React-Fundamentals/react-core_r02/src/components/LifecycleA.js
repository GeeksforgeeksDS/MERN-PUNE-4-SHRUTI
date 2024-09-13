import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
import LifecycleC from './LifeCycle'

class LifecycleA extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Alizeh'
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

	changeState = () => {
		this.setState({
			name: 'Shruti'
		})
	}

	render() {
		console.log('LifecycleA render')
		return (
			<div>
				<h1>{this.state.name}</h1>
				<button onClick={this.changeState}>Change state </button>
				<br />LifecycleA
				<LifecycleB />
				{/* <LifecycleC /> */}
			</div>
		)
	}
}

export default LifecycleA