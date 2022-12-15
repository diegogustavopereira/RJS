import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "../src/contexts/authContext.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Login from "./components/User/Login.js";
import Register from "./components/User/Register.js";
import Home from "./pages/home/home.js";
// import Teste from "./components/teste.js";
import Processos from "./components/process/process.js";
import CourtInformation from "./components/CourtInformation/courtInformation.js";
import HealthPlans from "./components/HealthPlans/HealthPlans.js";
import AddHealthPlan from "./components/HealthPlans/AddHealthPlan.js";
import Beneficiary from "./components/Beneficiary/Beneficiary";
import Drugs from "./components/Drugs/Drugs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [healthPlanForm, setHealthPlanForm] = useState({
    name: "",
    CNPJ: "",
  });

  return (
    <div className="App">
      <ToastContainer />
      {/* inicia o contexto que permite verificar se o usuário está logado e quais suas informações */}
      <AuthContextComponent>
        <NavigationBar className="NavigationBar" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          {/* <Route path="/teste" element={<Teste/>}/> */}
          <Route path="/processos" element={<Processos />} />
          <Route path="/court-information" element={<CourtInformation />} />
          <Route path="/health-plan" element={<HealthPlans />} />
          <Route
            path="/health-plan/create"
            element={
              <AddHealthPlan
                healthPlanForm={healthPlanForm}
                setHealthPlanForm={setHealthPlanForm}
              />
            }
          />
          <Route path="/beneficiary" element={<Beneficiary />} />
          <Route path="/drugs" element={<Drugs />} />
          {/* indica que essa rota está protegida */}
          {/* <Route path="/perfil" element={ <ProtectedRoute Component={Profile} /> } /> */}
        </Routes>
      </AuthContextComponent>
      {/* finaliza o contexto */}
    </div>
  );
}

export default App;
