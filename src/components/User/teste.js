import React from 'react';
import { Button, Card, Container, Form } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Teste() {

    ///////
    

    const handleSubmit = (e) => {
        e.preventDefault()

        toast.success('Novo vinho cadastrado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        console.log(toast.success);

        
        
    };

   
   

    ///////

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
            
			<Form >

             
				<Button variant="primary" type="submit" onClick={ handleSubmit }>
					Cadastrar
				</Button>
                
			</Form>
            </Card>
		</Container>
	);
}

export default Teste;