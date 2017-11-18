import React from "react";
import { KeyboardAvoidingView, View, Image, Text, TextInput, Button, StyleSheet, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

const formLogin = props => (
	<KeyboardAvoidingView behavior="padding" style={styles.container}>
		<View style={styles.header}>
			<Image style={styles.imgLogo} source={require("../../images/img-logo.png")} />
			<Text style={styles.txtTitle}>WhatsApp Clone</Text>
		</View>
		<View style={styles.content}>
			<TextInput keyboardType="email-address" value={props.email} style={styles.textInput} placeholder="E-mail" />
			<TextInput secureTextEntry value={props.senha} style={styles.textInput} placeholder="Senha" />
			<TouchableHighlight onPress={() => Actions.formCadastro()}>
				<Text style={styles.txtCadastro}>Ainda não tem um cadastro? Cadastre-se</Text>
			</TouchableHighlight>
		</View>
		<View style={styles.footer}>
			<View style={styles.viewAcessar}>
				<Button style={styles.btnAcessar} title="Acessar" onPress={() => false} />
			</View>
		</View>
	</KeyboardAvoidingView>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},
	header: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center"
	},
	imgLogo: {
		width: 100,
		height: 100
	},
	txtTitle: {
		fontSize: 25
	},
	content: {
		flex: 2
	},
	textInput: {
		fontSize: 20,
		height: 45
	},
	txtCadastro: {
		fontSize: 16
	},
	footer: {
		flex: 2
	},
	viewAcessar: {
		backgroundColor: "#115E54"
	},
	btnAcessar: {
		color: "#ffffff"
	}
});

const mapStateToProps = state => ({ 
	email: state.AutenticacaoReducer.email, 
	senha: state.AutenticacaoReducer.senha
})

export default connect(mapStateToProps, null)(formLogin);