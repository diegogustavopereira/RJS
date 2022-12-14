import { useContext, useState } from "react";
import {
	Button,
	Col,
	Form,
	Image,
	Input,
	Layout,
	Popconfirm,
	Row,
	Table,
} from "antd";
import Column from "antd/es/table/Column";
import del from "../../images/del.png";
import { FormDatasContext } from "../../contexts/formContext.js";

function DataDrugs2() {
	const [form] = Form.useForm();

	const { saveDrug, deleteDrug, dataDrug } = useContext(FormDatasContext);

	function FormDrug() {
		const onFinish = (values: any) => {
			console.log("Success:", values);
			saveDrug(values);

			form.resetFields();
		};

		const onFinishFailed = (errorInfo: any) => {
			console.log("Failed:", errorInfo);
		};

		return (
			<Form
				layout="vertical"
				name="basic"
				labelCol={{ span: 12 }}
				wrapperCol={{ span: 23 }}
				initialValues={{ remember: false }}
				onFinish={onFinish}
				form={form}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Row justify="center" align="bottom">
					<Col span={2}>
						<Form.Item label="CID" name="diseaseCID">
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item label="Medicamento" name="drug">
							<Input />
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item label="Quantidade" name="amount">
							<Input />
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item label="Valor Unitário" name="price">
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row justify="center" align="midle">
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Incluir
						</Button>
					</Form.Item>
				</Row>
			</Form>
		);
	}

	function TableDrugs() {
		const handleDelete = (key) => {
			deleteDrug(key);
		};

		return (
			<Table dataSource={dataDrug}>
				<Column title="CID" dataIndex="diseaseCID" key="diseaseCID" />
				<Column title="Medicamento" dataIndex="drug" key="drug" />
				<Column title="Quantidade" dataIndex="amount" key="amount" />
				<Column title="Preço Unitário" dataIndex="price" key="price" />
				<Column title="Total" dataIndex="total" key="total" />
				<Column
					title=""
					key="action"
					render={(_, record) =>
						dataDrug.length >= 1 ? (
							<Popconfirm
								title={"Tem certeza que deseja apagar?"}
								onConfirm={() => handleDelete(record.key)}
							>
								<a>
									<Image preview={false} src={del} width={20} />
								</a>
							</Popconfirm>
						) : null
					}
				/>
			</Table>
		);
	}

	return (
		<Layout style={{ padding: "20px", backgroundColor: "#e0f1fe" }}>
			<FormDrug />
			<TableDrugs />
		</Layout>
	);
}

export default DataDrugs2;
