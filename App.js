/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Components
import Routes from "./Routes";
// Reducers
import reducers from "./src/reducers";

export default props => (
	<Provider store={ createStore(reducers) }>
		<Routes />
	</Provider>
);
