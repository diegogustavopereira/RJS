import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "../src/contexts/authContext.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.js";
import Register from "./components/User/Register.js";
import Home from "./pages/home/home.js";
import Processos from "./components/process/process.js";
import CourtInformation from "./components/CourtInformation/courtInformation.js";
import HealthPlans from "./components/HealthPlans/HealthPlans.js";
import AddHealthPlan from "./components/HealthPlans/AddHealthPlan.js";
import HealthPlanDetails from "./components/HealthPlans/DetailsHealthPlan";
import Beneficiary from "./components/Beneficiary/Beneficiary.js";
import AddBeneficiary from "./components/Beneficiary/AddBeneficiary.js";
import BeneficiaryDetails from "./components/Beneficiary/DetailsBeneficiary.js";
import Drugs from "./components/Drugs/Drugs.js";
import AddDrug from "./components/Drugs/AddDrug.js";
import EditDrug from "./components/Drugs/EditDrug.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Users from "./components/User/users.js";
import { useState } from "react";

function App() {
  const [healthPlanForm, setHealthPlanForm] = useState({
    name: "",
    CNPJ: "",
  });

  const [beneficiaryForm, setBeneficiaryForm] = useState({
    name: "",
    CPF: "",
    healthPlan: "",
  });

  const [drugForm, setDrugForm] = useState({
    name: "",
    CID: "",
  });

  return (
    <div className="App">
      <ToastContainer />
      {/* inicia o contexto que permite verificar se o usuário está logado e quais suas informações */}
      <AuthContextComponent>
        <NavigationBar className="NavigationBar" />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/cadastro" element={<Register />} />
          <Route
            path="/processos"
            element={<ProtectedRoute Component={Processos} />}
          />
          <Route
            path="/court-information"
            element={<ProtectedRoute Component={CourtInformation} />}
          />
          <Route
            path="/health-plan"
            element={<ProtectedRoute Component={HealthPlans} />}
          />
          <Route
            path="/health-plan/create"
            element={
              <AddHealthPlan
                healthPlanForm={healthPlanForm}
                setHealthPlanForm={setHealthPlanForm}
              />
            }
          />
          <Route
            path="/health-plan/:id"
            element={
              <HealthPlanDetails
                healthPlanForm={healthPlanForm}
                setHealthPlanForm={setHealthPlanForm}
              />
            }
          />
          <Route
            path="/beneficiary"
            element={<ProtectedRoute Component={Beneficiary} />}
          />
          <Route
            path="/beneficiary/create"
            element={
              <AddBeneficiary
                beneficiaryForm={beneficiaryForm}
                setBeneficiaryForm={setBeneficiaryForm}
              />
            }
          />
          <Route
            path="/beneficiary/:id"
            element={
              <BeneficiaryDetails
                beneficiaryForm={beneficiaryForm}
                setBeneficiaryForm={setBeneficiaryForm}
              />
            }
          />
          <Route path="/drug" element={<ProtectedRoute Component={Drugs} />} />
          <Route
            path="/drug/create"
            element={<AddDrug drugForm={drugForm} setDrugForm={setDrugForm} />}
          />
          <Route
            path="/drug/edit/:id"
            element={<EditDrug drugForm={drugForm} setDrugForm={setDrugForm} />}
          />
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
