import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormFor from './FormFor';
import Slider from './Slider';
import Sliders from './Sliders';
import Mounter from './Mounter';
import Mixin from './Mixin';

ReactDOM.render(
	<App name="Tom" age={10}/>, 
	document.getElementById('app')
);

ReactDOM.render(
	<FormFor/>, 
	document.getElementById('form')
);

ReactDOM.render(
	<Slider/>, 
	document.getElementById('slider')
);

ReactDOM.render(
	<Sliders/>, 
	document.getElementById('sliders')
);

ReactDOM.render(
	<Mounter/>, 
	document.getElementById('mounter')
);

ReactDOM.render(
	<Mixin/>, 
	document.getElementById('mixin')
);