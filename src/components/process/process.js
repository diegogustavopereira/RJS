import "antd/dist/reset.css";
import "./process.css";
import { Divider, Layout } from "antd";
import DataProcess from "./dataProcess.js";
import FormProcesso from "./formProcess.js";
import DataDrugs from "./dataDrugs.js";
import { ProcessContextComponent } from "../../contexts/formContext";

function ProcessForm() {
	return (
		<Layout style={{ padding: "20px", backgroundColor: "#e0f1fe" }}>
		<h1>CADASTRO DE PROCESSOS</h1>
			<ProcessContextComponent>
				<FormProcesso />
				<Divider>Partes</Divider>
				<DataProcess />
				<Divider>Doença / Medicamento</Divider>
				<DataDrugs />
			</ProcessContextComponent>
		</Layout>
	);
}

export default ProcessForm;
