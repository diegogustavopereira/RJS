import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext.js";
import { api } from "../../api/api.js";
import './LoginModal.css';

function Login() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const navigate = useNavigate()
    
            //objeto criado no contexto
                              //faz a instância com o contexto
                              //indicando onde o objeto está localizado
    const { setLoggedUser } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

	const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
		console.log(form);

        try {
            //cria o objeto que receberá a informação sobre o usuário que 
            //pretende logar, enviando os dados do formulário a api
            const response = await api.post('/user/login', form);

            //inclui a responsta no setLoggedUser
            setLoggedUser({ ...response.data });

            //registra no localstorage os dados do usuário
                                                    //transforma o objeto em json
            localStorage.setItem("loggedUser", JSON.stringify(response.data));

            //direciona o usuário para página do perfil
            navigate('/perfil');

        } catch (error) {
            console.log(error)
        }
    }

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
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>E-mail</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={form.email}
                        		onChange={handleChange}
								placeholder="Insira seu e-mail"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Senha</Form.Label>
							<Form.Control
								type="password"
								name="password"
                        		value={form.password}
                        		onChange={handleChange}
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
					<Nav.Link href="/cadastro">Ainda não tem cadastro? Clique aqui</Nav.Link>
				</Modal.Footer>
			</Modal>
      </div>
		</Container>
	);
}

export default Login;
