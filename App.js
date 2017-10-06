/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FormLogin from "./src/components/FormLogin";
import FormCadastro from "./src/components/FormCadastro";

export default class App extends Component {
  render() {
    return (
      <FormLogin />
    );
  }
}
