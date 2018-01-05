import React from "react";
import { KeyboardAvoidingView, View, Image, Text, TextInput, Button, TouchableOpacity, ImageBackground } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

// Actions Creators
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

// Styles
import styles from '../styles/FormLogin';

const formLogin = props => (
	<ImageBackground style={ styles.backgroundImage } source={ require('../../images/bg.png') }>
		<KeyboardAvoidingView behavior="padding" style={ styles.container }>
			<View style={ styles.header }>
				<Image 
					style={ styles.imgLogo } 
					source={ require("../../images/img-logo.png") } 
				/>
				<Text style={ styles.txtTitle }>WhatsApp Clone</Text>
			</View>
			<View style={ styles.content }>
				<TextInput 
					keyboardType="email-address" 
					value={ props.email } 
					style={ styles.textInput } 
					placeholder="E-mail"
					onChangeText={ email => props.modificaEmail(email) }
				/>
				<TextInput 
					secureTextEntry 
					value={ props.senha } 
					style={ styles.textInput } 
					placeholder="Senha"
					onChangeText={ senha => props.modificaSenha(senha) }
				/>
				<TouchableOpacity onPress={ () => Actions.formCadastro() }>
					<Text style={ styles.txtCadastro }>Ainda não tem um cadastro? Cadastre-se</Text>
				</TouchableOpacity>
			</View>
			<View style={ styles.footer }>
				<View style={ styles.viewAcessar }>
					<Button 
						color="#ffffff"
						title="Acessar" 
						onPress={ () => false } 
					/>
				</View>
			</View>
		</KeyboardAvoidingView>
	</ImageBackground>
)

// Mapeando as variáveis de estado como props do componente
const mapStateToProps = state => ({ 
	email: state.AutenticacaoReducer.email, 
	senha: state.AutenticacaoReducer.senha
})

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);