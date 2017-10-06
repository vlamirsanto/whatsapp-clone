import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";

export default props => (
	<View style={styles.container}>
		<View style={styles.header}>
			<Text style={styles.txtTitle}>WhatsApp Clone</Text>
		</View>
		<View style={styles.content}>
			<TextInput style={styles.textInput} placeholder="E-mail" />
			<TextInput style={styles.textInput} placeholder="Senha" />
			<TouchableHighlight onPress={() => Actions.formCadastro()}>
				<Text style={styles.txtCadastro}>Ainda não tem um cadastro? Cadastre-se</Text>
			</TouchableHighlight>
		</View>
		<View style={styles.footer}>
			<View style={styles.viewAcessar}>
				<Button style={styles.btnAcessar} title="Acessar" onPress={() => false} />
			</View>
		</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},
	header: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
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