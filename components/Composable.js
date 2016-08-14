import React from 'react';
import ReactDOM from 'react-dom';

class Composable extends React.Component {
	constructor(){
		super();
		this.state = { 
			red: 0
		}
		this.update = this.update.bind(this)
	}

	update(e){
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red.refs.input).value
		})
	}

	render() {
		return(
			<div>
				<NumInputWidget
				 ref='green'
				 min={0}
				 max={255}
				 step={1}
				 val={+this.state.red}
				 label="Red"
				 update={this.update}/>

				<NumInputWidget
				 ref='red'
				 type='number'
				 min={0}
				 max={255}
				 step={1}
				 val={+this.state.red}
				 label="Red"
				 update={this.update}/>

				<p>This has a composable component.</p>
			</div>
			);
	}
}

class NumInputWidget extends React.Component {
	render() {
		let label = this.props.label !== '' ?
			<label>{this.props.label} - {this.props.val}</label> : ''
		return (
			  <div>
					<input ref='input'
					 type={this.props.type}
					 min={this.props.min}
					 max={this.props.max}
					 step={this.props.step}
					 defaultValue={this.props.val}
					 onChange={this.props.update} />
					 {label}
				 </div>
			);
	}
}

NumInputWidget.propTypes = {
	min: React.PropTypes.number,
	max: React.PropTypes.number,
	step: React.PropTypes.number,
	val: React.PropTypes.number,
	label: React.PropTypes.string,
	update: React.PropTypes.func.isRequired,
	type: React.PropTypes.oneOf(['number', 'range'])
}

NumInputWidget.defaultProps = {
	min: 0, max: 0, step: 1,
	val: 0, label: '', type: 'range'
}

export default Composable