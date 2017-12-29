import React from "react";
import { View, TextInput, Button, ImageBackground } from "react-native";
import { connect } from 'react-redux';

// Actions Creators
import { modificaEmail, modificaNome, modificaSenha } from '../actions/AutenticacaoActions';

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
					onChangeText={ nome => props.modificaNome(nome) }
				/>
				<TextInput 
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

export default connect(mapStateToProps, { modificaEmail, modificaNome, modificaSenha })(formCadastro);