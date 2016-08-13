import React from 'react';

class FormFor extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'John',
			age: 0
		}
	}

	update_name(name){
		this.setState({name: name.target.value})
	}

	update_age(age){
		this.setState({age: age.target.value})
	}

	render() {
		return(
			<div>
				<input type='text' onChange={this.update_name.bind(this)}/>
				<input type='text' onChange={this.update_age.bind(this)}/>				
				<h3>{this.state.name} is {this.state.age} years old</h3>
				<p>This is a component with 2 state variables updateable from the form</p>			
			</div>
			);
	}
}


export default FormFor