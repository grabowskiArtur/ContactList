import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";

import {store} from "./store/store";
import App, {AppContainer} from './components/App';

ReactDom.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById("app"));