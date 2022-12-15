import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../api/api.js";
import { useParams } from "react-router-dom";

function HealthPlans(healthPlanForm, setHealthPlanForm) {
  const [healthPlan, setHealthPlan] = useState([]);
  const { id } = useParams();
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
          <td>
            <Button variant="primary" style={{ margin: "5px" }}>
              <Link className="nav-link" to={`/health-plan/${healthPlan._id}`}>
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
        <Link className="nav-link" to={"/health-plan/create"}>
          Adicionar Novo Plano de Saúde
        </Link>
      </Button>
      <Table className="mt-4" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Detalhar</th>
          </tr>
        </thead>
        <tbody>{renderHealthPlan}</tbody>
      </Table>
    </Container>
  );
}

export default HealthPlans;
