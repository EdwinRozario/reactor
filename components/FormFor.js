import React from 'react';

class FormFor extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'John',
			age: 0
		}
		this.update_name = this.update_name.bind(this)
		this.update_age = this.update_age.bind(this)
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
				<Widget name={this.state.name} age={this.state.age}
				 update_name={this.update_name}
				 update_age={this.update_age}/>
				<p>
					This is a component with 2 state variables updateable from the form and the form and
					text is in a Widget. 
				</p>			
			</div>
			);
	}
}


const Widget = (props) => {
	return(
			<div>
				<input type='text' onChange={props.update_name}/>
				<input type='text' onChange={props.update_age}/>				
				<h3>{props.name} is {props.age} years old</h3>
			</div>
		);
}

export default FormFor