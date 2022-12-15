import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function DeleteDrug({ id }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DeleteDrug = async (id) => {
    await api.delete(`/drug/delete/${id}`);
    navigate("/drug");

    toast.success("Medicamento deletado com sucesso!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <Button variant="danger" onClick={handleShow}>
        Excluir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja MESMO excluir medicamento?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Atenção! Esta operação não poderá ser revertida.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => DeleteDrug(id)}>
            Excluir Medicamento
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteDrug;
