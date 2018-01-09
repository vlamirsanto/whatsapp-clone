/**
 * Rotas da aplicação
 * 
 * @author Vlamir Santo
 * @since 05/01/2018
 */
import React from "react";
import { Router, Scene } from "react-native-router-flux";

// Components
import FormLogin from "./src/components/FormLogin";
import FormCadastro from "./src/components/FormCadastro";
import BoasVindas from "./src/components/BoasVindas";
import Principal from './src/components/Principal';

export default props => (
	<Router
		// navigationBarStyle={{ backgroundColor: '#115E54'}} 
		// titleStyle={{ color: '#ffffff' }}
	>
		<Scene key="root">
			<Scene 
				key="formLogin" 
				component={ FormLogin } 
				title="Login"
				hideNavBar 
			/>
			<Scene 
				key="formCadastro"
				component={ FormCadastro }
				title="Cadastro"
				hideNavBar
			/>
			<Scene 
				key="boasVindas" 
				component={ BoasVindas } 
				title="Boas Vindas" 
				hideNavBar 
			/>
			<Scene
				key="principal"
				component={ Principal }
				title="Principal"
				hideNavBar
			/>
		</Scene>
	</Router>
);
