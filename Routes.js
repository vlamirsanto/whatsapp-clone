import React from "react";
import { Router, Scene } from "react-native-router-flux";

// Components
import FormLogin from "./src/components/FormLogin";
import FormCadastro from "./src/components/FormCadastro";

export default props => (
	<Router>
		<Scene key="root">
			<Scene key="formLogin" component={ FormLogin } hideNavBar title="Login" />
			<Scene key="formCadastro" component={ FormCadastro } title="Cadastro" />
		</Scene>
	</Router>
);
