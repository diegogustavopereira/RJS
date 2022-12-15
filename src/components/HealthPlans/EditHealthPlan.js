import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function EditHealthPlan({ id, healthPlanForm, setHealthPlanForm }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchHealthPlan = async () => {
      const response = await api.get(`/health-plan/${id}`);
      setHealthPlanForm(response.data);
    };

    fetchHealthPlan();
  }, [id, setHealthPlanForm]);

  const handleChange = (e) => {
    
    setHealthPlanForm({ ...healthPlanForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`health-plan/edit/${id}`, healthPlanForm);

      navigate("/health-plan");

      toast.success("Plano de Saúde atualizado!", {
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
    <div>
      <Button variant="primary" style={{ margin: "5px" }} onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Plano de Saúde</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o CNPJ do plano de saúde"
                name="CNPJ"
                value={healthPlanForm.CNPJ}
                onChange={handleChange}
              />
            </Form.Group>
            
            <Button variant="success" type="submit">
              Atualizar plano de saúde
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditHealthPlan;