import { Button, Card, Container, Form } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Faça Login no RJS</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Insira seu e-mail" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Fazer Login
              </Button>
            </Form>
          </Card.Text>
          <Card.Link href="/cadastro">Ainda não tem cadastro? Clique aqui</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
