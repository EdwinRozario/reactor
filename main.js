import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FormFor from './components/FormFor';
import Slider from './components/Slider';
import Sliders from './components/Sliders';
import Mounter from './components/Mounter';
import Mixin from './components/Mixin';
import Composable from './components/Composable';

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

ReactDOM.render(
	<Composable/>, 
	document.getElementById('composable')
);