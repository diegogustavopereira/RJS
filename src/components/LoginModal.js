import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import './LoginModal.css';

function Login() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
      <div className="btnLogin">
			<Button variant="primary" size="lg" onClick={handleShow}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-person-fill"
					viewBox="0 0 16 16"
				>
					<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
				</svg>
				<> Entrar</>
			</Button>{" "}
      </div>
      <div>
			<Modal show={show} onHide={handleClose} >
				<Modal.Header closeButton>
					<Modal.Title>Faça Login no SIREJUD</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form >
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>E-mail</Form.Label>
							<Form.Control
								type="email"
								placeholder="Insira seu e-mail"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Senha</Form.Label>
							<Form.Control
								type="password"
								placeholder="Insira sua senha"
							/>
						</Form.Group>
            <div className="modalLogin">
						<Button variant="primary" type="submit">
							Fazer Login
						</Button>
            </div>
					</Form>
				</Modal.Body>
				<Modal.Footer className="modalLogin">
					<Link href="/cadastro">Ainda não tem cadastro? Clique aqui</Link>
				</Modal.Footer>
			</Modal>
      </div>
		</Container>
	);
}

export default Login;
