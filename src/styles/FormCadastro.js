/**
 * Estilo do componente FormCadastro
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	backgroundImage: {
		flex: 1
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		flex: 1,
		padding: 20
	},
	txtTitle: {
		fontSize: 20,
		backgroundColor: 'transparent',
		color: '#ffffff',
		fontWeight: 'bold'
	},
	content: {
		flex: 2,
		justifyContent: "center"
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
	footer: {
		flex: 1
	},
	viewActions: {
		backgroundColor: "#115E54",
		marginBottom: 20		
	},
	containerError: {
		backgroundColor: "rgba(255,255,255,0.5)",
		padding: 10
	},
	textError: {
		color: 'red',
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: 'transparent'
	}
});