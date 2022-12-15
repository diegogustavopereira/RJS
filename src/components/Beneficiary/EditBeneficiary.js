import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function EditBeneficiary({ id, beneficiaryForm, setBeneficiaryForm }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchBeneficiary = async () => {
      const response = await api.get(`/beneficiary/${id}`);
      setBeneficiaryForm(response.data);
    };

    fetchBeneficiary();
  }, [id, setBeneficiaryForm]);

  const handleChange = (e) => {
    setBeneficiaryForm({ ...beneficiaryForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`beneficiary/edit/${id}`, beneficiaryForm);

      navigate("/beneficiary");

      toast.success("Beneficiário atualizado!", {
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
          <Modal.Title>Editar Beneficiário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                value={beneficiaryForm.CPF}
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

            <Button variant="success" type="submit">
              Atualizar beneficiário
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditBeneficiary;
