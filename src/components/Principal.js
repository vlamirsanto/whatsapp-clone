/**
 * Tela Principal
 * 
 * @author Vlamir Santo
 * @since 09/01/2018
 */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

// Components
import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';

// Styles
import styles from '../styles/Principal';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: Conversas,
    second: Contatos,
  });

  render() {
    return (
      <TabViewAnimated
        style={ styles.container }
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
