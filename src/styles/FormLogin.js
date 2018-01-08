/**
 * Estilo do componente FormLogin
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	backgroundImage: {
		flex: 1
	},
	container: {
		flex: 1,
		padding: 20
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
		fontSize: 25,
		color: '#fff',
		backgroundColor: 'transparent'
	},
	content: {
		flex: 2
	},
	textInput: {
		fontSize: 20,
		height: 45,
		padding: 10,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		borderRadius: 5,
		borderColor: '#fff',
		borderWidth: 1
	},
	txtCadastro: {
		fontSize: 16,
		color: '#fff',
		backgroundColor: 'transparent'
	},
	footer: {
		flex: 2
	},
	viewAcessar: {
		backgroundColor: "#115E54",
	}
});