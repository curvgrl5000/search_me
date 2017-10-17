import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LiveSearch from './components/live-search';
import peaks from './peaks.json';

ReactDOM.render(
	<LiveSearch characters={peaks} />, 
	document.getElementById('root')
);
