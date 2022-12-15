import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api.js";

function Drugs() {
  const [drugs, setDrugs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchDrugs = async () => {
        const response = await api.get("/drug");
        setDrugs(response.data);
        setIsLoading(false);
      };
      fetchDrugs();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderDrugs = drugs
    .filter((drugs) => drugs.name.toLowerCase().includes(search.toLowerCase()))
    .map((drugs) => {
      return (
        <tr key={drugs._id}>
          <td>{drugs.name}</td>
          <td>{drugs.CID}</td>
          <td>
            <Button variant="primary" size="sm" style={{ margin: "5px" }}>
              <Link className="nav-link" to={`/drug/edit/${drugs._id}`}>
                Alterar
              </Link>
            </Button>
            <Button
              variant="danger"
              size="sm"
              style={{ margin: "5px" }}
              onClick={() => deleteDrug(drugs._id)}
            >
              {/* <Link className="nav-link" to={`/drug/delete/${drugs._id}`}> */}
              Excluir
              {/* </Link> */}
            </Button>
          </td>
        </tr>
      );
    });

  const deleteDrug = async (id) => {
    await api.delete(`drugs/delete/${id}`);
    navigate("/drug");
    toast.success("Medicamento excluído com sucesso!", {
      position: "top-right",
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
    <Container>
      <Button variant="success" size="lg" style={{ margin: "15px" }}>
        <Link className="nav-link" to={"/drug/create"}>
          Adicionar Novo Medicamento
        </Link>
      </Button>
      {/* <Form className="my-4">
        <Form.Control
          type="search"
          placeholder="Procurar Plano de Saúde"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form> */}
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CID</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderDrugs}</tbody>
      </Table>
    </Container>
  );
}

export default Drugs;
