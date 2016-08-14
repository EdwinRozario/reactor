import React from 'react';

let MixinComponent = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { val: 0 }
	}

	update() {
		this.setState({ val: this.state.val + 1 })
	}

	render() {
		return (
			<InnerComponent
			 update={this.update}
			 {...this.state}
			 {...this.props} />
			)
	}
}

const Button = (props) => <button
                            onClick={props.update}>
                            {props.txt} | {props.val}
                           </button>

const Label = (props) => <label
													 onMouseMove={props.update}>
                           {props.txt} | {props.val}
												 </label>

let ButtonMixed = MixinComponent(Button)
let LabelMixed = MixinComponent(Label)

class Mixin extends React.Component {
	render() {
		return (
			<div>
				<ButtonMixed txt='Button' />
				<br/>
				<LabelMixed txt='Label' />
				<p>This component has 2 components in it, both of them use a same mixin component.</p>
			</div>
		);
	}
}

export default Mixin