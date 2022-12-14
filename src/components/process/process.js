import "antd/dist/reset.css";
import "./process.css";
import { Divider, Layout } from "antd";
import DataProcess from "./dataProcess.js";
import FormProcesso from "./formProcess.js";
import DataDrugs from "./dataDrugs.js";
import { FormProcessProvider } from "../../contexts/formContext";

function ProcessForm() {
	return (
		<Layout style={{ padding: "20px", backgroundColor: "#e0f1fe" }}>
			{/* <FormProcessProvider> */}
				<FormProcesso />
				<Divider>Partes</Divider>
				<DataProcess />
				<Divider>Doença / Medicamento</Divider>
				<DataDrugs />
			{/* </FormProcessProvider> */}
		</Layout>
	);
}

export default ProcessForm;
