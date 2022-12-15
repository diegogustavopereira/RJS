import { Button, Col, Form, Input, Layout, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../api/api.js";

function CourtInformation() {
	///Selecionar Processo
	const [listLawsuit, setListLawsuit] = useState([]);
	const [selectedLawsuit, setSelectedLawsuit] = useState([]);

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

	const handleDrugChange = (value) => {
		setSelectedLawsuit(value);
		console.log(value);
	};
	//////////////////////

	return (
		<Layout style={{ padding: "20px", backgroundColor: "#e0f1fe" }}>
			<Form
				layout="vertical"
				name="basic"
				labelCol={{ span: 12 }}
				wrapperCol={{ span: 23 }}
				initialValues={{ remember: false }}
				autoComplete="off"
			>
				<Row align="bottom">
					<Col span={8}>
						<Form.Item label="Número do Processo" name="processo">
							<Select
								defaultValue={""}
								style={{
									width: 200,
								}}
								onChange={handleDrugChange}
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
		</Layout>
	);
}

export default CourtInformation;
