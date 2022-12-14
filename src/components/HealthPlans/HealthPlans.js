import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { api } from "../../api/api.js";

function HealthPlans() {
  const [healthPlan, setHealthPlan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchHealthPlan = async () => {
        const response = await api.get("/health-plan");
        setHealthPlan(response.data);
        setIsLoading(false);
      };
      fetchHealthPlan();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderHealthPlan = healthPlan
    .filter((healthPlan) =>
      healthPlan.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((healthPlan) => {
      return (
        <tr key={healthPlan._id}>
          <td>{healthPlan.name}</td>
          <td>{healthPlan.CNPJ}</td>
          <td>
            <Button variant="primary" size="sm" style={{ margin: "5px" }}>
              <Link
                className="nav-link"
                to={`/health-plan/edit/${healthPlan._id}`}
              >
                Alterar
              </Link>
            </Button>
            <Button variant="danger" size="sm" style={{ margin: "5px" }}>
              <Link
                className="nav-link"
                to={`/health-plan/delete/${healthPlan._id}`}
              >
                Excluir
              </Link>
            </Button>
          </td>
        </tr>
      );
    });

  return (
    <Container>
      <Button variant="success" size="lg" style={{ margin: "15px" }}>
      <Link className="nav-link" to={"/health-plan/create"}>
        Adicionar Novo Plano de Saúde
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
            <th>CNPJ</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderHealthPlan}</tbody>
      </Table>
    </Container>
  );
}

export default HealthPlans;
