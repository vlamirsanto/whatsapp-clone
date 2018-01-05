import React from "react";
import { Router, Scene } from "react-native-router-flux";

// Components
import FormLogin from "./src/components/FormLogin";
import FormCadastro from "./src/components/FormCadastro";
import BoasVindas from "./src/components/BoasVindas";

export default props => (
	<Router>
		<Scene key="root">
			<Scene key="formLogin" component={ FormLogin } hideNavBar title="Login" />
			<Scene key="formCadastro" component={ FormCadastro } title="Cadastro" />
			<Scene key="boasVindas" component={ BoasVindas } hideNavBar title="Boas Vindas" />
		</Scene>
	</Router>
);
