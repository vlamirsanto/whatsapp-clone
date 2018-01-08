/**
 * Formulário de Cadastro
 * 
 * @author Vlamir Santo
 * @since 08/01/2018
 */
import React, { Component } from "react";
import { View, Text, TextInput, Button, ImageBackground } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

// Actions Creators
import { modificaEmail, modificaNome, modificaSenha, cadastraUsuario } from '../actions/AutenticacaoActions';

// Styles
import styles from '../styles/FormCadastro';

class formCadastro extends Component {
	_cadastraUsuario() {
		const { nome, email, senha } = this.props;
		this.props.cadastraUsuario({
			nome, email, senha
		});
	}

	render() {
		return (
			<ImageBackground 
				style={ styles.backgroundImage } 
				source={ require('../../images/bg.png') }
			>
				<View style={ styles.container }>
					<View style={ styles.header }>
						<Text style={ styles.txtTitle }>Cadastre-se</Text>
					</View>
					<View style={ styles.content }>
						<TextInput 
							value={ this.props.nome }
							style={ styles.textInput } 
							placeholder="Nome" 
							onChangeText={ nome => this.props.modificaNome(nome) }
						/>
						<TextInput 
							value={ this.props.email }
							style={ styles.textInput } 
							placeholder="E-mail" 
							onChangeText={ email => this.props.modificaEmail(email) }
						/>
						<TextInput 
							secureTextEntry
							value={ this.props.senha }
							style={ styles.textInput } 
							placeholder="Senha" 
							onChangeText={ senha => this.props.modificaSenha(senha) }
						/>
						{ (this.props.erroCadastro) ?
						<View style={ styles.containerError }>
							<Text style={ styles.textError }>
								{ this.props.erroCadastro }
							</Text>
						</View>
						: <Text style={ styles.textError }></Text> }
					</View>
					<View style={ styles.footer }>
						<View style={ styles.viewActions }>
							<Button 
								color="#ffffff"
								title="Salvar" 
								onPress={ () => this._cadastraUsuario() } 
							/>
						</View>
						<View style={ styles.viewActions }>
							<Button
								color="#ffffff"
								title="Voltar"
								onPress={ () => Actions.pop() }
							/>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
};

// Mapeando as variáveis de estado como props do componente
const mapStateToProps = state => ({
	nome: state.AutenticacaoReducer.nome,
	email: state.AutenticacaoReducer.email,
	senha: state.AutenticacaoReducer.senha,
	erroCadastro: state.AutenticacaoReducer.erroCadastro
});

// Conectando aos reducers
export default connect(
	mapStateToProps, 
	{ 
		modificaEmail, 
		modificaNome, 
		modificaSenha, 
		cadastraUsuario 
	}
)(formCadastro);