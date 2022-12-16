import { Button, Card, Col, Form, Input, Layout, Row, Select, Table } from "antd";
import Column from "antd/es/table/Column.js";
import { useEffect, useState } from "react";
import { api } from "../../api/api.js";

function CourtInformation() {
	///Selecionar Processo
	const [listLawsuit, setListLawsuit] = useState([]);
	const [lawsuitDetails, setLawsuitDetails] = useState([]);
	const [status, setStatus] = useState(false);

	useEffect(() => {
		try {
			const fetchLawsuit = async () => {
				const response = await api.get("/court-information");
				setListLawsuit(response.data);
			};
			fetchLawsuit();
		} catch (error) {
			console.log(error);
		}
	}, []);

	function handleLawsuitChange(id) {
		
		try {
			const fetchlawsuitDetails = async () => {
				const response = await api.get(`/court-information/autor/${id}`);
				setLawsuitDetails(response.data);
				setStatus(true);
			};
			fetchlawsuitDetails();
		} catch (error) {
			console.log(error);
		}
	}

	function TableDrugs() {
		let drugs = lawsuitDetails.drugs;
		console.log(Column);
		return (
			<Table dataSource={drugs}>
				<Column title="Medicamento" dataIndex="drug" key="drug" />
				<Column title="Quantidade" dataIndex="amount" key="amount" />
				{/* <Column title="Preço Unitário" dataIndex="price" key="price" />
				<Column render={(_, record) =>
						drugs.length >= 1 ? (
								<a>
									{Number(drugs.amount) * Number(drugs.price)}
								</a>
						) : null
					}/> */}
			</Table>
		);
	}

	

	function RenderCard() {
		return (
			<div className="site-card-border-less-wrapper">
				<Card
					bordered={false}
					style={{
						width: "50vw",
					}}
				>
					<p><b>Processo: </b>{lawsuitDetails.lawsuitNumber}</p>
					<p><b>Autor/Usuário</b>: {lawsuitDetails.namePerson}</p>
					<p><b>CPF: </b>{lawsuitDetails.cpfperson}</p>
					<p><b>Operadora: </b>{lawsuitDetails.healthPlanName}</p>
					<p><b>CNPJ: </b>{lawsuitDetails.healthPlanNameCnpj}</p>
					<TableDrugs/>
					<p><b>Total: </b>{Number(lawsuitDetails.total).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
				</Card>
			</div>
		);
	}
	

	return (
		<Layout style={{ padding: "20px", backgroundColor: "#e0f1fe", height: "91vh" }}>
			<Form
				layout="vertical"
				name="basic"
				labelCol={{ span: 12 }}
				wrapperCol={{ span: 23 }}
				initialValues={{ remember: false }}
				autoComplete="off"
			>
				<Row align="bottom">
					<Col span={6}>
						<Form.Item label="Número do Processo" name="processo">
							<Select
								defaultValue={""}
								
								onChange={handleLawsuitChange}
								options={listLawsuit.map((item) => ({
									label: item.lawsuitNumber,
									value: item._id,
								}))}
							/>
							{/* <Input /> */}
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Pesquisar
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
			{status && <RenderCard/>}
			
		</Layout>
	);
}

export default CourtInformation;
