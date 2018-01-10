/**
 * Formulário de Login
 * 
 * @author Vlamir Santo
 * @since 08/01/2018
 */
import React, { Component } from "react";
import { KeyboardAvoidingView, View, Image, Text, TextInput, Button, TouchableOpacity, ImageBackground, ActivityIndicator } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

// Actions Creators
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

// Styles
import styles from '../styles/FormLogin';

class formLogin extends Component 
{
	_autenticarUsuario() {
		const { email, senha } = this.props;
		this.props.autenticarUsuario({ email, senha });
	}

	// Renderizando o botão de Login
	renderBtnAcessar() {
		if( this.props.loadingLogin ) {
			return (
				<ActivityIndicator size="large" color="#ffffff" />
			)
		}
		return (
			<View style={ styles.viewAcessar }>
				<Button 
					color="#ffffff"
					title="Acessar" 
					onPress={ () => this._autenticarUsuario() } 
				/>
			</View>
		)
	}

	render() {
		return (
			<ImageBackground 
				style={ styles.backgroundImage } 
				source={ require('../../images/bg.png') }
			>
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
							value={ this.props.email } 
							style={ styles.textInput } 
							placeholder="E-mail"
							autoCapitalize="none"
							onChangeText={ email => this.props.modificaEmail(email) }
						/>
						<TextInput 
							secureTextEntry 
							value={ this.props.senha } 
							style={ styles.textInput } 
							placeholder="Senha"
							onChangeText={ senha => this.props.modificaSenha(senha) }
						/>
						{ (this.props.erroLogin) ?
						<View style={ styles.containerError }>
							<Text style={ styles.textError }>
								{ this.props.erroLogin }
							</Text>
						</View>
						: <Text style={ styles.textError }></Text> }
						<TouchableOpacity onPress={ () => Actions.formCadastro() }>
							<Text style={ styles.txtCadastro }>Ainda não tem um cadastro? Cadastre-se</Text>
						</TouchableOpacity>
					</View>
					<View style={ styles.footer }>
							{ this.renderBtnAcessar() }
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		)
	}
}

// Mapeando as variáveis de estado como props do componente
const mapStateToProps = state => ({ 
	email: state.AutenticacaoReducer.email, 
	senha: state.AutenticacaoReducer.senha,
	erroLogin: state.AutenticacaoReducer.erroLogin,
	loadingLogin: state.AutenticacaoReducer.loadingLogin
})

// Conectando aos reducers
export default connect(
	mapStateToProps, 
	{ 
		modificaEmail, 
		modificaSenha,
		autenticarUsuario
	}
)(formLogin);