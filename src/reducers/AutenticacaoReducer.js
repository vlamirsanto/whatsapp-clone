/**
 * Reducer de autenticação de usuário
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	erroCadastro: '',
	erroLogin: ''
};

export default (state = INITIAL_STATE, action) => 
{
	switch( action.type ) {
		case 'MODIFICA_EMAIL': 
			return { ...state, email: action.payload };

		case 'MODIFICA_SENHA':
			return { ...state, senha: action.payload };

		case 'MODIFICA_NOME':
			return { ...state, nome: action.payload };

		case 'LOGIN_USUARIO_ERRO':
			if( action.payload.code == 'auth/invalid-email' )
				return { ...state, erroLogin: 'Informe um e-mail válido!' };
			else if( action.payload.code == 'auth/wrong-password' )
				return { ...state, erroLogin: 'A senha informada é inválida!' };
			else
				return { ...state, erroLogin: action.payload.message };

		case 'CADASTRA_USUARIO_ERRO':
			if( action.payload.code == 'auth/invalid-email' )
				return { ...state, erroCadastro: 'E-mail inválido!' };
			else if( action.payload.code == 'auth/network-request-failed' )
				return { ...state, erroCadastro: 'Sem conexão com a internet!' };
			else if ( action.payload.code == 'auth/email-already-in-use' )
				return { ...state, erroCadastro: 'E-mail usado por outra conta!' };
			else if( action.payload.code == 'auth/weak-password' )
				return { ...state, erroCadastro: 'Sua senha deve conter no mínimo 6 caracteres.' };
			else
				return { ...state, erroCadastro: action.payload.message };

		case 'CADASTRA_USUARIO_SUCESSO':
			return { ...state, nome: '', senha: '' };

		default:
			return state;
	}
};