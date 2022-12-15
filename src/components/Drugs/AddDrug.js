import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function AddDrug({ drugForm, setDrugForm }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDrugForm({ ...drugForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("drug/create", drugForm);
      navigate("/drug");

      toast.success("Novo medicamento cadastrado!", {
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
          <Form.Label>Nome do Medicamento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o nome do medicamento"
            name="name"
            value={drugForm.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o CID da doença"
            name="CID"
            value={drugForm.CID}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          className="mt-4"
          variant="success"
          type="submit"
          style={{ margin: "5px" }}
        >
          Cadastrar Medicamento
        </Button>

        <Button
          className="mt-4"
          variant="info"
          type="submit"
          style={{ margin: "5px" }}
        >
          <Link to={"/drug"}>Voltar</Link>
        </Button>
      </Form>
    </Container>
  );
}

export default AddDrug;
