import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default props => (
	<View style={styles.container}>
		<View style={styles.content}>
			<TextInput style={styles.textInput} placeholder="Nome" />
			<TextInput style={styles.textInput} placeholder="E-mail" />
			<TextInput style={styles.textInput} placeholder="Senha" />
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
	content: {
		flex: 4,
		justifyContent: "center"
	},
	textInput: {
		fontSize: 20,
		height: 45
	},
	footer: {
		flex: 1
	},
	viewAcessar: {
		backgroundColor: "#115E54"
	},
	btnAcessar: {
		color: "#ffffff"
	}
});