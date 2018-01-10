/**
 * Actions de autenticação de usuário
 * 
 * @author Vlamir Santo
 * @since 08/01/2018
 */
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { 
  MODIFICA_EMAIL, 
  MODIFICA_NOME, 
  MODIFICA_SENHA, 
  CADASTRA_USUARIO_ERRO, 
  CADASTRA_USUARIO_SUCESSO, 
  LOGIN_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_ANDAMENTO,
  CADASTRO_ANDAMENTO
} from './types';

// Action para modificar o email
export const modificaEmail = ( email ) => {
  return {
    type: MODIFICA_EMAIL,
    payload: email
  }
}

// Action para modificar a senha
export const modificaSenha = ( senha ) => {
  return {
    type: MODIFICA_SENHA,
    payload: senha
  } 
}

// Action para modificar o nome
export const modificaNome = ( nome ) => {
  return {
    type: MODIFICA_NOME,
    payload: nome
  }
}

// Action para login de usuário
export const autenticarUsuario = ({ email, senha }) => {
  return dispatch => {
    dispatch({ type: LOGIN_ANDAMENTO });

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then( res => loginUsuarioSucesso(dispatch) )
      .catch( error => loginUsuarioErro(error, dispatch) );
  }
}

// Função para disparar o sucesso do login
const loginUsuarioSucesso = (dispatch) => {
  dispatch({
    type: LOGIN_USUARIO_SUCESSO
  });

  // Carregando a tela Principal
  Actions.principal();
}

// Função para disparar o erro do login
const loginUsuarioErro = (error, dispatch) => {
  dispatch({
    type: LOGIN_USUARIO_ERRO,
    payload: error
  });
}

// Action para cadastro de usuário
export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    dispatch({ type: CADASTRO_ANDAMENTO });

    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then( user => {
        // Salvando o nome do usuário no DATABASE
        // email (base64) como chave
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`) // interpolação de strings
          .push({ nome })
          .then(value => cadastroUsuarioSucesso(dispatch) )
          .catch();
      })
      .catch( error => cadastroUsuarioErro(error, dispatch) );
  }
}

// Função para disparar o sucesso do cadastro
const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ({
    type: CADASTRA_USUARIO_SUCESSO
  });

  // Carregando a tela de boas vindas
  Actions.boasVindas();
}

// Função para disparar o erro do cadastro
const cadastroUsuarioErro = (error, dispatch) => {
  dispatch ({
    type: CADASTRA_USUARIO_ERRO,
    payload: error
  });
}