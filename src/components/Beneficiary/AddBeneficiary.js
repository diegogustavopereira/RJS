import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function AddBeneficiary({ beneficiaryForm, setBeneficiaryForm }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBeneficiaryForm({ ...beneficiaryForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("beneficiary/create", beneficiaryForm);
      navigate("/beneficiary");

      toast.success("Novo beneficiário cadastrado!", {
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
      <h2>Cadastrar Novo Medicamento</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome do Beneficiário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o nome completo do beneficiário"
            name="name"
            value={beneficiaryForm.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o CPF do beneficiário"
            name="CPF"
            value={beneficiaryForm.CID}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Plano de Saúde</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o plano de saúde do beneficiário"
            name="healthPlan"
            value={beneficiaryForm.healthPlan}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          className="mt-4"
          variant="success"
          type="submit"
          style={{ margin: "5px" }}
        >
          Cadastrar Beneficiário
        </Button>

        <Button
          className="mt-4"
          variant="info"
          type="submit"
          style={{ margin: "5px" }}
          path="/beneficiary"
        >
        </Button>
      </Form>
    </Container>
  );
}

export default AddBeneficiary;
