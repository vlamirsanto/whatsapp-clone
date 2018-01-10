/**
 * Menu para o TabBar
 * 
 * @author Vlamir Santo
 * @since 10/01/2018
 */
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';

// Styles
import styles from '../styles/TabBarMenu';

export default props => (
  <View style={ styles.container }>
    <StatusBar style={ styles.containerHeader } />
    <View style={ styles.header }>
      <Text style={ styles.title }>WhatsApp Clone</Text>
    </View>
    <TabBar { ...props } style={ styles.tabBar } />
  </View>
);