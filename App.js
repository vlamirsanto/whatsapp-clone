/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from "./Routes";
import reducers from "./src/reducers/index";

export default props => (
	<Provider store={createStore(reducers)}>
		<Routes />
	</Provider>
);
