import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "../src/contexts/authContext.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Register from "./components/User/Register.js";
import Home from "./pages/home/home.js";
import Processos from "./components/process/process.js";
import CourtInformation from "./components/CourtInformation/courtInformation.js";
import HealthPlans from "./components/HealthPlans/HealthPlans.js";
import Beneficiary from "./components/Beneficiary/Beneficiary";
import Drugs from "./components/Drugs/Drugs";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/ProtectedRoute.js";
import Users from "./components/User/users";

function App() {
	return (
		<div className="App">
    <ToastContainer />
			{/* inicia o contexto que permite verificar se o usuário está logado e quais suas informações */}
			<AuthContextComponent>
				<NavigationBar className="NavigationBar"/>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/login" element={<Login />} /> */}
					<Route path="/cadastro" element={<Register />} />
					<Route path="/processos" element={<ProtectedRoute Component={Processos} />} />
          			<Route path="/court-information" element={<ProtectedRoute Component={CourtInformation} />} />
					<Route path="/health-plan" element={<ProtectedRoute Component={HealthPlans} />} />
					<Route path="/beneficiary" element={<ProtectedRoute Component={Beneficiary} />} />
					<Route path="/drugs" element={<ProtectedRoute Component={Drugs} />} />
					<Route path="/users" element={<ProtectedRoute Component={Users} />} />
					{/* indica que essa rota está protegida */}
					{/* <Route path="/perfil" element={ <ProtectedRoute Component={Profile} /> } /> */}
				</Routes>
			</AuthContextComponent>
			{/* finaliza o contexto */}
		</div>
	);
}

export default App;
