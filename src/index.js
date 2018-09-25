import React from 'react'
import ReactDOM from 'react-dom';
import './reset.css';
import registerServiceWorker from './registerServiceWorker';
import Route from './router'
import {Provider} from 'mobx-react'
import stores from './stores'

ReactDOM.render((
	<Provider {...stores} >
		{Route}
	</Provider>
), document.getElementById('root'));
registerServiceWorker();