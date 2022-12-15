import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function EditDrug({ id, drugForm, setDrugForm }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchDrug = async () => {
      const response = await api.get(`/drug/${id}`);
      setDrugForm(response.data);
    };

    fetchDrug();
  }, [id, setDrugForm]);

  const handleChange = (e) => {
    setDrugForm({ ...drugForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`drug/edit/${id}`, drugForm);

      navigate("/drug");

      toast.success("Medicamento atualizado!", {
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
          <Modal.Title>Editar Medicamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                value={drugForm.CNPJ}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Atualizar Medicamento
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditDrug;
