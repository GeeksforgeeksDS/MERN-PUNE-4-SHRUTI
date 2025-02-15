import React, { Component, Pure } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Gaurav'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Shriyas'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				{/* <RegComp UserName={this.state.name} /> */}
				{/* <PureComp name={this.state.name} /> */}
				<MemoComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp