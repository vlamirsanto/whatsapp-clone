import { StyleSheet } from "react-native";

export default StyleSheet.create({
	backgroundImage: {
		flex: 1
	},
	container: {
		flex: 1,
		padding: 20
	},
	content: {
		flex: 4,
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
	viewAcessar: {
		backgroundColor: "#115E54"
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