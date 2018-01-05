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

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch ({
    type: 'CADASTRA_USUARIO_SUCESSO'
  });

  Actions.boasVindas();
}

const cadastroUsuarioErro = (error, dispatch) => {
  dispatch ({
    type: 'CADASTRA_USUARIO_ERRO',
    payload: error
  });
}