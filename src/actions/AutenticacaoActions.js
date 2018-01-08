/**
 * Actions de autenticação de usuário
 * 
 * @author Vlamir Santo
 * @since 08/01/2018
 */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// Action para modificar o email
export const modificaEmail = ( email ) => {
  return {
    type: 'MODIFICA_EMAIL',
    payload: email
  }
}

// Action para modificar a senha
export const modificaSenha = ( senha ) => {
  return {
    type: 'MODIFICA_SENHA',
    payload: senha
  } 
}

// Action para modificar o nome
export const modificaNome = ( nome ) => {
  return {
    type: 'MODIFICA_NOME',
    payload: nome
  }
}

// Action para cadastro de usuário
export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then( user => cadastroUsuarioSucesso(dispatch) )
      .catch( error => cadastroUsuarioErro(error, dispatch) );
  }
}

// Função para disparar o sucesso do cadastro
const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ({
    type: 'CADASTRA_USUARIO_SUCESSO'
  });

  // Carregando a tela de boas vindas
  Actions.boasVindas();
}

// Função para disparar o erro do cadastro
const cadastroUsuarioErro = (error, dispatch) => {
  dispatch ({
    type: 'CADASTRA_USUARIO_ERRO',
    payload: error
  });
}