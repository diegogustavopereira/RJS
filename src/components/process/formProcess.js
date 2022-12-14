import { Button, Col, Form, Input, Layout, Row } from "antd";

function FormProcesso() {

	const onFinish = (values: any) => {
		console.log("Success:", values);
		
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Layout style={{ padding: "20px", backgroundColor: "#e0f1fe" }}>
			<Form
				layout="vertical"
				name="basic"
				labelCol={{ span: 12 }}
				wrapperCol={{ span: 23 }}
				initialValues={{ remember: false }}
				onFinish={onFinish}
				// form={form}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Row align="bottom">
				<Col span={8}>
					<Form.Item label="Processo" name="processo">
						<Input />
					</Form.Item>
				</Col>
				<Col span={4}>
				<Form.Item>
						<Button type="primary" htmlType="submit">
							Enviar
						</Button>
					</Form.Item>
				</Col>
				</Row>
			</Form>
		</Layout>
	);
}

export default FormProcesso;
