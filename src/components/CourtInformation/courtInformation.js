import { Button, Col, Form, Input, Layout, Row } from "antd";

function CourtInformation() {
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
              <Input />
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
