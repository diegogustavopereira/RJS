import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function AddHealthPlan({ healthPlanForm, setHealthPlanForm }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setHealthPlanForm({ ...healthPlanForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("health-plan/create", healthPlanForm);
      navigate("/health-plan");

      toast.success("Novo plano de saúde cadastrado!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2>Cadastrar Novo Plano de Saúde</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome do Plano de Saúde</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o nome completo do plano de saúde"
            name="name"
            value={healthPlanForm.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CNPJ do Plano de Saúde</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o CNPJ do plano de saúde"
            name="CNPJ"
            value={healthPlanForm.CNPJ}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          className="mt-4"
          variant="success"
          type="submit"
          style={{ margin: "5px" }}
        >
          Cadastrar Plano de Saúde
        </Button>

        <Button
          className="mt-4"
          variant="info"
          type="submit"
          style={{ margin: "5px" }}
        >
          <Link to={"/health-plan"}>Voltar</Link>
        </Button>
      </Form>
    </Container>
  );
}

export default AddHealthPlan;
