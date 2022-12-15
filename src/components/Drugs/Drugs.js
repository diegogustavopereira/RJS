import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../api/api.js";
import { useParams } from "react-router-dom";

function Drug(drugForm, setDrugForm) {
  const [drug, setDrug] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchDrug = async () => {
        const response = await api.get("/drug");
        setDrug(response.data);
        setIsLoading(false);
      };
      fetchDrug();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderDrug = drug
    .filter((drug) =>
      drug.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((drug) => {
      return (
        <tr key={drug._id}>
          <td>{drug.name}</td>
          <td>
            <Button variant="primary" style={{ margin: "5px" }}>
              <Link className="nav-link" to={`/drug/${drug._id}`}>
                Ver Detalhes
              </Link>
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <Container>
      <Button variant="success" size="lg" style={{ margin: "15px" }}>
        <Link className="nav-link" to={"/drug/create"}>
          Adicionar Novo Medicamento
        </Link>
      </Button>
      <Table className="mt-4" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Detalhar</th>
          </tr>
        </thead>
        <tbody>{renderDrug}</tbody>
      </Table>
    </Container>
  );
}

export default Drug;
