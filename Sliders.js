import React from 'react';
import ReactDOM from 'react-dom';

class Sliders extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0,
			blue: 0,
			green: 0,
			total: 0
		}
		this.update = this.update.bind(this)
	}

	update(e){
		this.setState({
			red: parseInt(ReactDOM.findDOMNode(this.refs.red).value),
			blue: parseInt(ReactDOM.findDOMNode(this.refs.blue).value),
			green: parseInt(ReactDOM.findDOMNode(this.refs.green).value)
		})

		this.setState({
			total: this.state.red + this.state.blue + this.state.green
		})
	}

	render() {
		return(
			<div>
				<Widget ref='red' update={this.update}/>
				{this.state.red}
				<br />
				<Widget ref='blue' update={this.update}/>
				{this.state.blue}
				<br />
				<Widget ref='green' update={this.update}/>								
				{this.state.green}
				<br />
				Total is {this.state.total}
				<p>This is a component with 3 widgets</p>
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

export default Sliders