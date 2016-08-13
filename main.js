import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormFor from './FormFor';
import Slider from './Slider';

ReactDOM.render(
	<App name="This is my first txt prop" age={10}/>, 
	document.getElementById('app'))
;

ReactDOM.render(
	<FormFor/>, 
	document.getElementById('form'))
;

ReactDOM.render(
	<Slider/>, 
	document.getElementById('slider'))
;