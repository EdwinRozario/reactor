import React from 'react';
import ReactDOM from 'react-dom';

class Mounter extends React.Component {
	constructor() {
		super();
		this.state = { value: true }
		this.toggle = this.toggle.bind(this)
	}

	toggle(e){
		this.setState({value: !this.state.value});
		if (this.state.value) {
			ReactDOM.render(<Widget />, document.getElementById('mountable'))
		} else {
			ReactDOM.unmountComponentAtNode(document.getElementById('mountable'))
		}
	}

	render() {
		return(
			<div>
				<button onClick={this.toggle.bind(this)}>{this.state.value ? 'Mount' : 'Unmount'}</button>
				<p>
					This is a component that can Mount and Unmount another component. 
				</p>			
			</div>
			);
	}
}


const Widget = (props) => {
	return(
			<div>
				<h1>
					<b>MOUNTABLE</b>
				</h1>
			</div>
		);
}

export default Mounter