import { useContext } from "react";
import {
	Button,
	Col,
	Form,
	Image,
	Input,
	Layout,
	Popconfirm,
	Radio,
	Row,
	Table,
} from "antd";
import Column from "antd/es/table/Column";
import del from "../../images/del.png";
import { FormDatasContext } from "../../contexts/formContext.js";

function DataProcess() {

	const { SaveParte, DeleteParte, dataParte } = useContext(FormDatasContext);

	const [form] = Form.useForm();

	function FormDadosProcesso() {
		const onFinish = (values: any) => {
			console.log("Success:", values);
			SaveParte(values);

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
					<Col span={10}>
						<Form.Item label="Nome" name="name">
							<Input />
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item label="CPF/CNPJ" name="cpfCnpj">
							<Input />
						</Form.Item>
					</Col>
					<Col span={5}>
						<Form.Item name="position">
							<Radio.Group>
								<Radio value="Autor(a)"> Autor(a) </Radio>
								<Radio value="Ré(u)"> Ré(u) </Radio>
							</Radio.Group>
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

	function TablePartes() {
		const handleDelete = (key) => {
			DeleteParte(key);
	    };

		return (
			
				<Table dataSource={dataParte}>
					<Column title="Parte" dataIndex="name" key="name" />
					<Column title="CPF/CNPJ" dataIndex="cpfCnpj" key="cpfCnpj" />
					<Column title="Posição" dataIndex="position" key="position" />
					<Column
						title=""
						key="action"
						render={(_, record) =>
							dataParte.length >= 1 ? (
								<Popconfirm
									title="Tem certeza que deseja apagar?"
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
			<FormDadosProcesso />
			<TablePartes />
		</Layout>
	);
}
export default DataProcess;
