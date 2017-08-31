import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './layouts/App.Router';

ReactDOM.render(<AppRouter/>,document.getElementById('app'));

if(module.hot){
	module.hot.accept('./layouts/App.Router.js', () => {
		const AppRouter = require('./layouts/App.Router.js').default;
		console.log('>>>>>> Router Updated !! <<<<<<<')
		ReactDOM.render(
			<AppRouter />,
			document.getElementById('app')
		);
	});
}