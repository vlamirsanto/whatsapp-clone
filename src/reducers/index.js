/**
 * Arquivo para conbinar todos os reducers da aplicação
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';

export default combineReducers({
	AutenticacaoReducer: AutenticacaoReducer
});