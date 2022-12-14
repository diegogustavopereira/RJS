import { useState } from "react";
import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { api } from '../../api/api.js';

function Register() {

    ///////

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(form);
        
        if(form.email === form.confirmEmail && form.password === form.confirmPassword) {

            await console.log(form);
        
        try {
            // criar a requisição para enviar este novo usuário
                // requisição método POST
            await api.post("/user/register", { ...form })
    
            navigate('/')
        } catch (error) {
            console.log(error)
        } 
        
        } else {
            toast.warn('Confira a senha e/ou email informados!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    };

	return (
		<Container style={{ height: "100vh",
                        display: "flex", 
                        flexdirection: "column", 
                        justifyContent: "center",
                        alignItems: "center" }}
        > 
            <Card style={{ width: '40rem', padding: "1rem" }}>
            
                <Card.Title>
                    Cadastro de usuário
                    <p/>
                </Card.Title>
            
			<Form onSubmit={ handleSubmit }>

                <FloatingLabel
					controlId="name"
					label="Nome"
					className="mb-3"
				>
					<Form.Control 
                        type="text"
                        name="name"
                        placeholder="nome" 
                        value={ form.name }
                        onChange={ handleChange } />
				</FloatingLabel>


				<FloatingLabel
					controlId="email"
					label="E-mail"
					className="mb-3"
                >
					<Form.Control 
                        type="email"
                        name="email"
                        placeholder="email" 
                        value={ form.email }
                        onChange={ handleChange } />
				</FloatingLabel>
                
                <FloatingLabel
					controlId="confirmEmail"
					label="Confirme o e-mail"
					className="mb-3"
				>
					<Form.Control 
                        type="email"
                        name="confirmEmail"
                        placeholder="email" 
                        value={ form.confirmEmail }
                        onChange={ handleChange }
                        />
				</FloatingLabel>

				<FloatingLabel 
                    controlId="password" 
                    label="Senha"
                    className="mb-3"
                >
					<Form.Control 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={ form.password }
                        onChange={ handleChange } 
                        />
				</FloatingLabel>
                
                <FloatingLabel 
                    controlId="confirmPassword" 
                    label="Confirme a senha"
                    className="mb-3"
                >
					<Form.Control 
                        type="password"
                        name="confirmPassword" 
                        placeholder="Password" 
                        value={ form.confirmPassword }
                        onChange={ handleChange }
                        />
				</FloatingLabel>

				<Button variant="primary" type="submit">
					Cadastrar
				</Button>
                
			</Form>
            </Card>
		</Container>
	);
}

export default Register;
