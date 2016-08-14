import React from 'react';

class App extends React.Component {
	render() {
		let name = this.props.name;
		let age = this.props.age;
		return(
			<div>
				<h2>{name} is {age} years old.</h2>
				<p>This is a component with 2 props</p>
			</div>
			);
	}
}

App.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number
}

App.defaultProps = {
	age: 0
}

// const App = () => <h1>This is a Constant</h1>

export default App