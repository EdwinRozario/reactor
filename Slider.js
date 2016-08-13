import React from 'react';

class Slider extends React.Component {
	constructor(){
		super();
		this.state = { count: 0}
		this.update = this.update.bind(this)
	}

	update(e){
		this.setState({count: e.target.value})
	}

	render() {
		return(
			<div>
				<h2>Rage is {this.state.count}</h2>
				<Widget update={this.update}/>
				<p>This is a component with 1 prop and a widget</p>
			</div>
			);
	}
}

class Widget extends React.Component {
	render() {
		return (
				<input type='range'
				 min='0'
				 max='100'
				 onChange={this.props.update}
				/>
			);
	}
}

export default Slider