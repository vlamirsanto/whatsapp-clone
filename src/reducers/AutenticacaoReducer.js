/**
 * Reducer de autenticação de usuário
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
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
} from '../actions/types';

const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	erroCadastro: '',
	erroLogin: '',
	loadingLogin: false,
	loadingCadastro: false
};

export default (state = INITIAL_STATE, action) => 
{
	switch( action.type ) {
		case MODIFICA_EMAIL: 
			return { ...state, email: action.payload };

		case MODIFICA_SENHA:
			return { ...state, senha: action.payload };

		case MODIFICA_NOME:
			return { ...state, nome: action.payload };

		case LOGIN_USUARIO_ERRO:
			switch( action.payload.code ){
				case 'auth/invalid-email': 
					return { ...state, erroLogin: 'Informe um e-mail válido!', loadingLogin: false };
				case 'auth/wrong-password':
					return { ...state, erroLogin: 'A senha informada é inválida!', loadingLogin: false };
				case 'auth/user-not-found':
					return { ...state, erroLogin: 'Usuário inexistente! Tente novamente.', loadingLogin: false }
				default:
					return { ...state, erroLogin: action.payload.message, loadingLogin: false };
			}

		case CADASTRA_USUARIO_ERRO:
			switch( action.payload.code ){
				case 'auth/invalid-email':
					return { ...state, erroCadastro: 'E-mail inválido!', loadingCadastro: false };
				case 'auth/network-request-failed':
					return { ...state, erroCadastro: 'Sem conexão com a internet!', loadingCadastro: false };
				case 'auth/email-already-in-use':
					return { ...state, erroCadastro: 'E-mail usado por outra conta!', loadingCadastro: false };
				case 'auth/weak-password':
					return { ...state, erroCadastro: 'Sua senha deve conter no mínimo 6 caracteres.', loadingCadastro: false };
				default:
					return { ...state, erroCadastro: action.payload.message, loadingCadastro: false };
			}

		case CADASTRA_USUARIO_SUCESSO:
			return { ...state, nome: '', senha: '', loadingCadastro: false };

		case LOGIN_ANDAMENTO:
			return { ...state, loadingLogin: true };

		case CADASTRO_ANDAMENTO:
			return { ...state, loadingCadastro: true };

		default:
			return state;
	}
};