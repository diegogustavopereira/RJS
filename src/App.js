import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "../src/contexts/authContext.js";
import Login from "./components/User/Login.js";
import Register from "./components/User/Register.js";
import Home from "./pages/home/home.js";
import Processos from "./components/process/process.js";
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className="App">
    <ToastContainer />
			{/* inicia o contexto que permite verificar se o usuário está logado e quais suas informações */}
			<AuthContextComponent>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/cadastro" element={<Register />} />
					<Route path="/" element={<Home />} />
          			<Route path="/processos" element={<Processos />} />
					{/* indica que essa rota está protegida */}
					{/* <Route path="/perfil" element={ <ProtectedRoute Component={Profile} /> } /> */}
				</Routes>
			</AuthContextComponent>
			{/* finaliza o contexto */}
		</div>
	);
}

export default App;
