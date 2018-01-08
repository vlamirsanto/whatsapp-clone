/**
 * Arquivo inicial da aplicação
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

// Config
import { configFirebase } from './src/configs';
// Components
import Routes from "./Routes";
// Reducers
import reducers from "./src/reducers";

export default class App extends Component {
	componentWillMount() {
		firebase.initializeApp( configFirebase );
	}

	render() {
		return (
			<Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
				<Routes />
			</Provider>
		)
	}
};
