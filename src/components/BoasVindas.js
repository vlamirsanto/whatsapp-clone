import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Styles
import styles from '../styles/BoasVindas';

export default props => (
  <ImageBackground style={ styles.backgroundImage } source={ require('../../images/bg.png') }>
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.textTitle }>Seja Bem-vindo!</Text>
        <Image style={ styles.imgLogo } source={ require('../../images/img-logo.png') } />
      </View>
      <View style={ styles.footer }>
        <View style={ styles.btnContainer }>
          <Button color="#ffffff" title="Fazer login" onPress={ () => Actions.formLogin() } />
        </View>
      </View>
    </View>
  </ImageBackground>
);