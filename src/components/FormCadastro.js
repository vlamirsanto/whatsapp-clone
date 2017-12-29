import React from "react";
import { View, TextInput, Button, ImageBackground } from "react-native";
import { connect } from 'react-redux';

// Styles
import styles from '../styles/FormCadastro';

const formCadastro = props => (
	<ImageBackground style={ styles.backgroundImage } source={ require('../../images/bg.png') }>
		<View style={ styles.container }>
			<View style={ styles.content }>
				<TextInput 
					value={ props.nome }
					style={ styles.textInput } 
					placeholder="Nome" 
				/>
				<TextInput 
					value={ props.email }
					style={ styles.textInput } 
					placeholder="E-mail" 
				/>
				<TextInput 
					secureTextEntry
					value={ props.senha }
					style={ styles.textInput } 
					placeholder="Senha" 
				/>
			</View>
			<View style={ styles.footer }>
				<View style={ styles.viewAcessar }>
					<Button 
						style={ styles.btnAcessar } 
						title="Acessar" 
						onPress={ () => false } 
					/>
				</View>
			</View>
		</View>
	</ImageBackground>
);

// Mapeando as variáveis de estado como props do componente
const mapStateToProps = state => ({
	nome: state.AutenticacaoReducer.nome,
	email: state.AutenticacaoReducer.email,
	senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps, null)(formCadastro);